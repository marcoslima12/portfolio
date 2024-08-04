interface HardSkillProps {
  skill: string;
}

export const HardSkill = ({ skill }: HardSkillProps) => {
  return <span className="text-base text-dark-highlight">{skill}</span>;
};
