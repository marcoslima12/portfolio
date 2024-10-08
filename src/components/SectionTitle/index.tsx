interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="text-xl lg:text-3xl text-light-text dark:text-dark-text underline-offset-8 underline decoration-highlight pb-8 ">
      {title}
    </h1>
  );
};
