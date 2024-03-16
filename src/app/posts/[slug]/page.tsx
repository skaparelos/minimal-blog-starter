import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Link from "next/link";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Header />
      <Container>
        <div className="grid grid-cols-5 gap-6 md:gap-12 pt-32">

          {/* left sidebar */}
          <div className="col-span-5 md:col-span-1">
            <div className="pt-8">
              <Link href="/">
                <p className="text-sm text-slate-400">← Back to Blog</p>
              </Link>
            </div>
          </div>

          {/* middle */}
          <div className="col-span-5 md:col-span-3">
            <article className="pb-32">
              <PostHeader title={post.title} />
              <PostBody content={content} />
            </article>
          </div>

          {/* right sidebar */}
          <div className="col-span-5 md:col-span-1" >
          </div>

        </div>
      </Container>
    </main >
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | firstlast.dev`;

  return {
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
