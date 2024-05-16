"use client";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useEffect, useState } from "react";
import brandLogo from "../../../../public/brand-logo-mobile.svg";
import bagButtonIcon from "../../../../public/elements/bag-white.webp";
import menuButtonIcon from "../../../../public/elements/menu-white.webp";
import searchButtonIcon from "../../../../public/elements/search-white.webp";
import { navDir } from "../../_assets/navigation/navDirectory";
import theme from "../../_styles/muiTheme";
import { useRouter } from "next/navigation";

export const TopNavBar = () => {
  const router = useRouter();
  const [navOpened, setNavOpened] = useState(false);

  useEffect(() => {
    // Added to stop the screen from scrolling in the background while the navigation menu is open
    navOpened
      ? document.body.classList.add("body-no-scroll")
      : document.body.classList.remove("body-no-scroll");

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [navOpened]);

  // Define spring animation configuration
  const springs = useSpring({
    transform: navOpened ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <div className="main-nav">
          <div className="brand-logo-container">
            <Image
              onClick={() => router.push("/")}
              alt="brand-logo"
              src={brandLogo}
              className="nav-logo"
            />
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
                onClick={() => setNavOpened(!navOpened)}
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
                  padding: "1rem 1rem",
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <CloseIcon
                  onClick={() => setNavOpened(!navOpened)}
                  sx={{
                    alignSelf: "flex-end",
                    fontSize: "2.5rem",
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Container
                  disableGutters={true}
                  maxWidth={false}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                    paddingY: "1.5rem",
                  }}
                >
                  {navDir.map((nav, index) => (
                    <Typography
                      key={index}
                      fontWeight={500}
                      sx={{
                        fontSize: "1.5rem",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {nav.title}
                    </Typography>
                  ))}
                </Container>
              </Container>
            </animated.nav>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};
