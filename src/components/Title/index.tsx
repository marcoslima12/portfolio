interface TitleExperencieProps {
  title: string;
}

export const TitleForExperience = ({ title }: TitleExperencieProps) => {
  return (
    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
      {title}
    </h3>
  );
};
