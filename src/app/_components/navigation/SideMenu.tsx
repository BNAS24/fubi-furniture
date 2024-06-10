"use client";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import theme from "../../_styles/muiTheme";
import { navDir } from "../../_assets/navigation/navDirectory";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import { useBodyStyle } from "../../_context/BodyStylesContext";

const SideNavigation = animated(Container);

export default function SideMenu({ handleMenu, menuOpen }: any) {
  const [animationComplete, setAnimationComplete] = useState(true);
  const { setBodyStyle } = useBodyStyle();

  // Define spring animation configuration
  const spring = useSpring({
    width: menuOpen ? "100%" : "0",
    onStart: () => {
      setAnimationComplete(false);
    },
    onRest: (result) => {
      menuOpen && result.finished
        ? setAnimationComplete(false)
        : setAnimationComplete(true);
    },
  });

  useEffect(() => {
    menuOpen
      ? setBodyStyle({
        display: "block",
        position: "fixed",
        inset: 0,
        })
      : setBodyStyle({
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          minHeight: "100vh",
          background: "var(--main-white)",
          overflowX: "hidden",
          fontFamily: "__Inter_aaf875, Roboto, sans-serif",
        });
  }, [menuOpen, setBodyStyle]);

  return (
    //Nav side menu
    <SideNavigation
      disableGutters={true}
      maxWidth={false}
      style={spring}
      sx={{
        display: !animationComplete ? "flex" : "none",
        flexDirection: "row",
        backgroundColor: "rgba(15, 15, 15, 0.1)",
        backdropFilter: "blur(8px) !important",
        height: "100%",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: "101",
      }}
    >
      <Backdrop
        open={menuOpen}
        onClick={() => handleMenu()}
        sx={{
          flex: 1,
          position: "unset",
          height: "100%",
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
          padding: "1rem 1rem 2rem 1rem",
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <CloseIcon
          onClick={() => handleMenu()}
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
            justifyContent: "space-around",
            height: "100%",
            maxHeight: "100%",
            width: "100%",
            overflowY: "auto",
          }}
        >
          {navDir.map((nav, index) => (
            <Link
              key={index}
              onClick={() => handleMenu()}
              className="side-nav-link-decoration"
              href={`${process.env.NEXT_PUBLIC_DOMAIN}${nav.path}`}
              replace
              style={{
                flex: "0 1",
              }}
            >
              <Typography
                fontWeight={500}
                sx={{
                  fontSize: "1.5rem",
                  flex: "0 1",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                {nav.title}
              </Typography>
            </Link>
          ))}
        </Container>
      </Container>
    </SideNavigation>
  );
}
