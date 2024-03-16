import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <span className="font-bold">
        firstlast.dev
      </span>
    </Link>
  );
};

export default Logo;
