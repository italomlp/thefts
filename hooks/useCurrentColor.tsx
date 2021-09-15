import React, { useState, createContext, useContext } from "react";

type CurrentColorContextType = {
  currentColor: string;
  setCurrentColor: (color: string) => void;
};

const CurrentColorContext = createContext<CurrentColorContextType>({
  currentColor: "#000000",
  setCurrentColor: () => {},
});

const CurrentColorProvider: React.FC = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#000000");

  return (
    <CurrentColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </CurrentColorContext.Provider>
  );
};

export const useCurrentColor = () => {
  const context = useContext(CurrentColorContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentColor must be used within a CurrentColorProvider"
    );
  }
  return context;
};

export default CurrentColorProvider;
