import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
};

export function PostHeader({ title }: Props) {
  return (
    <>
      <div className="flex justify-center">
        <PostTitle>{title}</PostTitle>
      </div >
    </>
  );
}
