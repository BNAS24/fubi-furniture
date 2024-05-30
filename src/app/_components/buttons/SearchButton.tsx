import Box from "@mui/material/Box";
import theme from "../../_styles/muiTheme";
import { SearchPropTypes } from "../navigation/Nav";
import { animated, useSpring } from "@react-spring/web";

const SearchAnimated = animated(Box);

const SearchButton = ({
  clicked,
  searchClicked,
  bagButtonClicked,
}: SearchPropTypes) => {
  // Animation spring for search button
  const spring = useSpring({
    from: { width: searchClicked ? "15%" : "15%" },
    to: { width: searchClicked ? "100%" : "15%" },
  });

  return (
    <SearchAnimated
      style={spring}
      sx={{
        display: bagButtonClicked ? "none" : "flex",
        justifyContent: searchClicked ? "flex-start" : "center",
        alignItems: "center",
        maxWidth: searchClicked ? "unset" : "40px",
        height: "2.5rem",
        padding: "0.5rem 0.5rem",
        backgroundColor: searchClicked
          ? theme.palette.primary.light
          : "transparent",
        borderRadius: "2.5rem",
      }}
    >
      <svg
        className="search-button"
        onClick={() => clicked?.()}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.5C7.95763 3.5 4.68066 6.77697 4.68066 10.8193C4.68066 14.8617 7.95763 18.1386 12 18.1386C16.0423 18.1386 19.3193 14.8617 19.3193 10.8193C19.3193 6.77697 16.0423 3.5 12 3.5ZM3.18066 10.8193C3.18066 5.94854 7.1292 2 12 2C16.8707 2 20.8193 5.94854 20.8193 10.8193C20.8193 13.5062 19.6177 15.9125 17.7225 17.5301L20.2719 20.7877C20.5272 21.1139 20.4697 21.5853 20.1435 21.8405C19.8173 22.0958 19.3459 22.0383 19.0907 21.7121L16.5021 18.4045C15.1842 19.1884 13.6447 19.6386 12 19.6386C7.1292 19.6386 3.18066 15.6901 3.18066 10.8193Z"
          fill="white"
        />
      </svg>
      <input
        className={searchClicked ? "unset" : "search-button-false"}
        type="search"
        placeholder="search"
        id="site-search"
      />
    </SearchAnimated>
  );
};

export default SearchButton;
