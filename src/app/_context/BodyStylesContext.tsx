import React, { createContext, useState, useCallback, useContext } from "react";

interface NavigationState {
  display?: string;
  flexDirection?: string;
  width?: string;
  minHeight?: string;
  background?: string;
  overflowX?: string;
  overflowY?: string | null;
  fontFamily?: string;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  inset?: number | string;
};

type BodyStyleContextType = {
  styles: NavigationState;
  setBodyStyle: (state: NavigationState) => void;
};

const BodyStyleContext = createContext<BodyStyleContextType>(
  {} as BodyStyleContextType
);

export const BodyStyleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [styles, setStyles] = useState<NavigationState>({
    display: "flex",
    flexDirection: "column",
    background: "var(--main-white)",
    overflowX: "hidden",
    fontFamily: "Inter, Roboto, sans-serif",
  });

  // const setBodyStyle = useCallback(
  //   (state: NavigationState) => {
  //     setStyles(state);
  //   },
  //   [] // No dependencies needed as we're not using any external variables or props
  // );
  const setBodyStyle = (state: NavigationState) => {
    setStyles(state);
  };
  
  return (
    <BodyStyleContext.Provider value={{ styles, setBodyStyle }}>
      {children}
    </BodyStyleContext.Provider>
  );
};

export const useBodyStyle = () => {
  const context = useContext(BodyStyleContext);
  if (!context) {
    throw new Error("useBodyStyle must be used within a StateProvider");
  }
  return context;
};
