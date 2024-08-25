import { useNav } from "@/contexts/navContext";
import Link from "next/link";

interface navOpRouting {
  link: string;
  pageName: string;
  currentPath: string;
}

export const NavOp = ({ link, pageName, currentPath }: navOpRouting) => {
  const { toggleNav } = useNav();

  return (
    <Link
      onClick={toggleNav}
      href={link}
      className="shadow-sm lg:shadow-none shadow-highlight w-full h-full pl-4 py-3  lg:p-6 lg:hover:bg-transparent lg:dark:hover:bg-transparent hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all"
    >
      <span
        className={`text-sm lg:text-lg font-medium text-light-text lg:hover:text-highlight dark:text-dark-text dark:hover:text-highlight transition-all lg:border-l-4 box-border lg:pl-2 ${
          currentPath === link
            ? "border-highlight !text-highlight hover:te dark:!text-highlight dark:border-highlight"
            : "border-transparent"
        }`}
      >
        {pageName}
      </span>
    </Link>
  );
};
