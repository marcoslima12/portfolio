import { HardSkill } from "../HardSkill";
import { LocationForExperience } from "../Location";
import { TimeForExperience } from "../Time";
import { TitleForExperience } from "../Title";

interface WorkExperienceProps {
    time: string;
    role: string;
    company: string;
    about: string;
    skills: string[];
    link?: string;
  }

export const WorkExperience = ({
    about,
    company,
    role,
    time,
    skills,
    link,
  }: WorkExperienceProps) => {
    return (
      <div className="mb-8">
        <div className="w-full flex-col lg:flex lg:flex-row justify-between pb-4">
          <div className="lg:w-1/2 flex flex-col justify-start items-start gap-2 lg:gap-0">
            <TimeForExperience time={time} />
            <TitleForExperience title={role} />
            <LocationForExperience link={link} localation={company} />
            <div className="lg:w-4/5 flex justify-start flex-wrap items-center gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="flex items-center gap-1">
                  <HardSkill skill={skill} />
                  {index < skills.length - 1 && (
                    <span className="separator text-highlight">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <p className="lg:w-1/3 text-light-text dark:text-dark-text text-sm lg:text-base">{about}</p>
        </div>
        <hr className="border-light-text dark:border-dark-text" />
      </div>
    );
  };