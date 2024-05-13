"use client";
import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import theme from "../../styles/muiTheme";

interface HomepageButtonProps {
  text: string;
  variantProp: string;
}

export const HomepageButton: React.FC<HomepageButtonProps> = ({
  text,
  variantProp,
}) => {
  const hoverStyles =
    variantProp === "outlined"
      ? {
          "&:hover": {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          },
        }
      : {};

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variantProp as any}
        disableElevation
        sx={{
          mt: "16px",
          height: "32px",
          width: "64px",
          borderRadius: "16px",
          ...hoverStyles,
        }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
