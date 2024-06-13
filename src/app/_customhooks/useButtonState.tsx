import { useBodyStyle } from "@/app/_context/BodyStylesContext";
import { useState } from "react";

// Custom hook for managing button states
export const useButtonState = () => {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);
    const [bagButtonClicked, setBagButtonClicked] = useState(false);
  
    const { setBodyStyle } = useBodyStyle();
    const toggleSearchButton = () => setSearchButtonClicked(!searchButtonClicked);
    const toggleBagButton = () => setBagButtonClicked(!bagButtonClicked);
  
    return {
      searchButtonClicked,
      bagButtonClicked,
      toggleSearchButton,
      toggleBagButton,
      setBodyStyle,
    };
  };
  