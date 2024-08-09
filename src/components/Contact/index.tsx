import { ReactNode } from "react";

interface ContactOptionProps {
    icon: ReactNode;
    info: string;
    link?: string;
  }
  
  export const ContactOption = ({ icon, info, link }: ContactOptionProps) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex gap-3 items-center justify-start text-light-text dark:text-dark-text hover:${
          link ? "underline" : "none"
        }`}
      >
        {icon}
        <span className="text-sm lg:text-lg">{info}</span>
      </a>
    );
  };