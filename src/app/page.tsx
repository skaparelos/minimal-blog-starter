import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";
import { PostPreview } from "@/app/_components/post-preview";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Header />
      <Container>

        {/* Main message */}
        <div className="py-16 sm:text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold ">Firstname Lastname</h1>
          <h2 className="text-lg text-slate-600">I write about building software. Previously at X, and Y.</h2>
        </div>

        {/* Posts */}
        <div className="relative sm:pb-12 max-w-xl mx-auto">

          {/* vertical line */}
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 sm:block" />

          <div className="space-y-16">
            {allPosts.map((post) => (
              <PostPreview {...post} />
            ))}
          </div>

        </div>

      </Container>
    </main>
  );
}
