import Link from "next/link";
import DateFormatter from "@/app/_components/date-formatter";
import { Icons } from "@/app/_components/icons";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <article key={slug} className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50" />
      <Icons.dot className="hidden absolute right-full mr-6 top-2 text-slate-200  md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block" />
      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight text-slate-900 pt-8 lg:pt-0">
          {title}
        </h3>
        <div
          className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2"
        >{excerpt}</div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <dd className='whitespace-nowrap text-sm leading-6 text-slate-400'>
            <DateFormatter dateString={date} />
          </dd>
        </dl>
      </div>
      <Link
        href={`/posts/${slug}`}
        className="flex items-center text-sm font-medium"
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
        <span className="relative">
          Read more<span className="sr-only">, {title}</span>
        </span>
        <Icons.rightArrow className="relative mt-px overflow-visible ml-2.5" />
      </Link>
    </article>
  );
}
