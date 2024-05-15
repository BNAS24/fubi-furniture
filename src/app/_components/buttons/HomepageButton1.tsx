import { ThemeProvider } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button"; // Import ButtonProps from Material-UI
import theme from "../../_styles/muiTheme";

interface HomepageButtonProps {
  text: string;
  variant: ButtonProps["variant"]; // Define type based on ButtonProps
}

export const HomepageButton = ({ text, variant }: HomepageButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        disableElevation
        sx={{
          mt: "1rem",
          height: "2rem",
          width: "4rem",
          borderRadius: "16rem",
          "&:hover": {
            color: variant ? theme.palette.primary.contrastText : null,
            backgroundColor:
              variant === "outlined" ? theme.palette.primary.main : null,
          },
        }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
