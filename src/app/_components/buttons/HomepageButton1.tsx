import { ThemeProvider } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button"; // Import ButtonProps from Material-UI
import theme from "../../_styles/muiTheme";

interface HomepageButtonProps {
  text: string;
  variantProp: ButtonProps['variant']; // Define type based on ButtonProps
}

export const HomepageButton = ({
  text,
  variantProp,
}: HomepageButtonProps) => {
  
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variantProp}
        disableElevation
        sx={{
          mt: "16px",
          height: "32px",
          width: "64px",
          borderRadius: "16px",
          "&:hover": {
            color: variantProp ? theme.palette.primary.contrastText : null,
            backgroundColor: variantProp === "outlined" ? theme.palette.primary.main : null,
          },
        }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};
