// contexts/NavContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface NavContextProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
