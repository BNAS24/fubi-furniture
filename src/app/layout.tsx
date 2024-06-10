"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./_styles/muiTheme";
import CartProvider from "./_context/CartContext";
import { BodyStyleProvider, useBodyStyle } from "./_context/BodyStylesContext";
import SideMenu from "./_components/navigation/SideMenu";
import { TopNavBar } from "./_components/navigation/Nav";
import { Footer } from "./_components/navigation/Footer";
import "./globals.css";
import { useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <BodyStyleProvider>
            <CartProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
            </CartProvider>
          </BodyStyleProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { styles } = useBodyStyle();

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    // Body component using MUI Container component
    <Container
      disableGutters
      maxWidth={false}
      component="body"
      sx={{
        ...styles,
      }}
    >
      <SideMenu handleMenu={handleMenu} menuOpen={menuOpen} />
      <TopNavBar handleMenu={handleMenu} menuOpen={menuOpen} />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 0",
          backgroundColor: "var(--main-white)",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Container>
  );
};

export default RootLayout;
