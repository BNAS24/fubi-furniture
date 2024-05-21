"use client";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import theme from "../../_styles/muiTheme";
import BagButton from "../buttons/BagButton";
import HomepageLogo from "../buttons/HomepageLogo";
import MenuButton from "../buttons/MenuButton";
import SearchButton from "../buttons/SearchButton";

export interface SearchPropTypes {
  clicked?: () => any;
  searchClicked: boolean;
}

export const TopNavBar = () => {
  const [searchButtonClicked, setSearchButtonClicked] =
    useState<boolean>(false);

  const clicked = () => setSearchButtonClicked(!searchButtonClicked);

  useEffect(() => {
    const searchElement = document.getElementById("site-search");
    if (searchElement) {
      searchElement.style.display = searchButtonClicked ? "flex" : "none";
    }
  }, [searchButtonClicked]);

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: searchButtonClicked ? "center" : "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "0px 16px",
          }}
        >
          <HomepageLogo searchClicked={searchButtonClicked} />
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: searchButtonClicked ? "center" : "flex-end",
              gap: searchButtonClicked ? "1rem" : "unset",
            }}
          >
            <SearchButton
              clicked={clicked}
              searchClicked={searchButtonClicked}
            />
            <BagButton searchClicked={searchButtonClicked} />
            <MenuButton searchClicked={searchButtonClicked} />
            <Typography
              align="center"
              onClick={() => setSearchButtonClicked(false)}
              sx={{
                display: searchButtonClicked ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                color: theme.palette.primary.contrastText,
                padding: "0 0",
              }}
            >
              cancel
            </Typography>
          </Container>
        </Container>
      </nav>
    </ThemeProvider>
  );
};
