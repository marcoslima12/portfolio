import { LocationForExperience } from "../Location";
import { TimeForExperience } from "../Time";
import { TitleForExperience } from "../Title";

interface EducationalExperienceProps {
  title: string;
  time: string;
  location: string;
  note?: string;
}

export const EducationalExperience = ({
  location,
  time,
  title,
  note,
}: EducationalExperienceProps) => {
  return (
    <div className="pb-6">
      <TimeForExperience time={time} />
      <TitleForExperience title={title} />
      <LocationForExperience localation={location} />
      <h3 className="text-xs lg:text-sm text-light-text dark:text-dark-text">{note}</h3>
    </div>
  );
};
