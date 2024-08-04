interface SoftSkillProp {
  text: string;
}

export const SoftSkill = ({ text }: SoftSkillProp) => {
  return <span className="font-bold">{text}</span>;
};
