import React, { createContext, useState, useCallback, useContext } from "react";

interface NavigationState {
  display?: string;
  flexDirection?: string;
  width?: string;
  minHeight?: string;
  background?: string;
  overflowX?: string;
  fontFamily?: string;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
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
    width: "100vw",
    minHeight: "100vh",
    background: "var(--main-white)",
    overflowX: "hidden",
    fontFamily: "__Inter_aaf875, Roboto, sans-serif",
  });

  // const setBodyStyle = (state: NavigationState) => {
  //   setStyles((prevState) => ({
  //     ...prevState,
  //     ...state,
  //   }));
  // };

  const setBodyStyle = useCallback(
    (state: NavigationState) => {
      setStyles(state);
    },
    [] // No dependencies needed as we're not using any external variables or props
  );

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
