import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="w-full pt-8 pb-8 container mx-auto flex items-center justify-center">
      {children}
    </div>
  );
};
