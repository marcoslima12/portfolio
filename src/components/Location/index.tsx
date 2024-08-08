import { GoToDark, GoToLight } from "@/assets";
import { useTheme } from "@/contexts/themeContext";
import Image from "next/image";

interface LocationExperencieProps {
  localation: string;
  link?: string;
}

export const LocationForExperience = ({
  localation,
  link,
}: LocationExperencieProps) => {
  const { theme } = useTheme();
  return (
    <a target="_blank" href={link} className="flex justify-start items-center">
      <h3 className="text-sm lg:text-base text-light-text dark:text-dark-text">
        {localation}
      </h3>
      {link && (
        <Image
          width={16}
          height={16}
          alt="Ícone para ir a página"
          src={theme === "dark" ? GoToDark : GoToLight}
        />
      )}
    </a>
  );
};
