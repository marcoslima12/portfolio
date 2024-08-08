import Link from "next/link";

interface navOpRouting {
  link: string;
  pageName: string;
  currentPath: string;
}

export const NavOp = ({ link, pageName, currentPath }: navOpRouting) => {
  return (
    <Link
      href={link}
      className="shadow-sm lg:shadow-none shadow-light-highlight w-full h-full pl-4 py-3  lg:p-6 lg:hover:bg-transparent lg:dark:hover:bg-transparent hover:bg-gray-200 dark:hover:bg-neutral-600 transition-all"
    >
      <span
        className={`text-sm lg:text-lg font-medium text-light-text lg:hover:text-light-highlight dark:text-dark-text dark:hover:text-light-highlight transition-all lg:border-l-4 box-border lg:pl-2 ${
          currentPath === link
            ? "border-light-highlight text-highlight-important hover:te dark:text-highlight-important dark:border-dark-highlight"
            : "border-transparent"
        }`}
      >
        {pageName}
      </span>
    </Link>
  );
};
