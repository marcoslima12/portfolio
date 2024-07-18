interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="text-3xl underline-offset-8 hover:underline decoration-dark-highlight pb-8">
      {title}
    </h1>
  );
};
