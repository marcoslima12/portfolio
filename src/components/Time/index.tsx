interface TimeExperencieProps {
  time: string;
}

export const TimeForExperience = ({ time }: TimeExperencieProps) => {
  return (
    <h3 className="text-xs lg:text-sm text-light-text dark:text-dark-text">{time}</h3>
  );
};
