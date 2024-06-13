// Utility function to determine container position
export const updateContainerPosition = ({
    menuOpen,
    searchButtonClicked,
    bagButtonClicked,
  }: any) => {
    if (menuOpen) return "sticky";
    if (searchButtonClicked || bagButtonClicked) return "fixed";
    return "sticky";
  };