import { GoToDark, GoToLight } from "@/assets";
import { TitleForExperience } from "../Title";
import Image from "next/image";
import { useTheme } from "@/contexts/themeContext";

interface ProjectProps {
  title: string;
  tasks: string[];
  link?: string;
}

export const Project = ({ tasks, title, link }: ProjectProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-2 w-1/4 flex-auto max-w-96 text-light-text dark:text-dark-text">
      <a target="_blank" href={link} className="flex justify-start">
        <TitleForExperience title={title} />
        {link && (
          <Image
            width={16}
            height={16}
            alt="Ícone para ir a página"
            src={theme === "dark" ? GoToDark : GoToLight}
          />
        )}
      </a>
      <ul className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};
