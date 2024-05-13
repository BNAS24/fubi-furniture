"use client";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import brandLogo from "../../../../public/brand-logo-mobile.svg";
import bagButtonIcon from "../../../../public/elements/bag-white.webp";
import menuButtonIcon from "../../../../public/elements/menu-white.webp";
import searchButtonIcon from "../../../../public/elements/search-white.webp";
import theme from "../../_styles/muiTheme";
import { useSpring, animated } from "@react-spring/web";
import Box from "@mui/material/Box";

export const TopNavBar = () => {
  const [navOpened, setNavOpened] = useState(false);

  // Define spring animation configuration
  const springs = useSpring({
    transform: navOpened ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <div className="main-nav">
          <div className="brand-logo-container">
            <Image alt="brand-logo" src={brandLogo} className="nav-logo" />
          </div>
          <div className="nav-controllers">
            <Image
              alt="search"
              src={searchButtonIcon}
              className="search-button nav-buttons"
            />
            <Image
              alt="bag"
              src={bagButtonIcon}
              className="bag-button nav-buttons"
            />
            <Image
              onClick={() => setNavOpened(!navOpened)}
              alt="menu"
              src={menuButtonIcon}
              className="menu-button nav-buttons"
            />

            {/*Sidebar nav component*/}
            <animated.nav
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "transparent",
                width: "100%",
                height: "100vh",
                position: "fixed",
                top: 0,
                right: 0,
                margin: "0 0",
                ...springs,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: theme.palette.background.paper,
                }}
              />
              <Container
                disableGutters={true}
                maxWidth={false}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "296px",
                  height: "100%",
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <CloseIcon
                  onClick={() => setNavOpened(!navOpened)}
                  sx={{
                    alignSelf: "flex-end",
                    fontSize: "32px",
                    mr: "8px",
                    mt: "8px",
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                Hello World
              </Container>
            </animated.nav>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};
