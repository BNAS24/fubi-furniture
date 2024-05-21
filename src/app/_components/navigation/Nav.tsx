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
      <Container
        disableGutters={true}
        maxWidth={false}
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "sticky",
          paddingTop: searchButtonClicked ? "1.5rem" : "unset",
          top: 0,
          height: searchButtonClicked ? "100vh" : "64px",
          background: theme.palette.primary.main,
          zIndex: 99,
        }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: searchButtonClicked ? "center" : "space-between",
            alignItems: "center",
            width: "100%",
            height: searchButtonClicked ? "unset" : "100%",
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
      </Container>
    </ThemeProvider>
  );
};
