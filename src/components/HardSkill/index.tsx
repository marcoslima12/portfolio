interface HardSkillProps {
  skill: string;
}

export const HardSkill = ({ skill }: HardSkillProps) => {
  return <span className="text-sm lg:text-base text-highlight">{skill}</span>;
};
