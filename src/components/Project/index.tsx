import { TitleForExperience } from "../Title";

interface ProjectProps {
  title: string;
  tasks: string[];
  link?: string;
}

export const Project = ({ tasks, title, link }: ProjectProps) => {
  return (
    <div className="flex flex-col gap-2 w-1/4 flex-auto max-w-96 text-light-text dark:text-dark-text">
      <a target="_blank" href={link}>
        <TitleForExperience title={title} />
      </a>
      <ul className="flex flex-col gap-2">
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
};
