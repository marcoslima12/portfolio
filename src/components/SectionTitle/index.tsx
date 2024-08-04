interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="text-3xl text-light-text dark:text-dark-text underline-offset-8 underline decoration-dark-highlight pb-8 ">
      {title}
    </h1>
  );
};
