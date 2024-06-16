import { ThemeProvider } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button"; // Import ButtonProps from Material-UI
import theme from "../../_styles/muiTheme";
// import Link from "next/link";
import { CustomLink } from "../misc/CustomLink";

interface HomepageButtonProps {
  text: string;
  variant: ButtonProps["variant"]; // Define type based on ButtonProps
  link?: string;
}

export const CallToAction = ({
  text,
  variant,
  link = "/",
}: HomepageButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomLink
        href={link}

      >
        <Button
          variant={variant}
          disableElevation
          sx={{
            borderRadius: "16rem",
            whiteSpace: "nowrap",
            color: theme.palette.primary.contrastText,
            fontWeight: 500,
            fontSize: {
              xs: "0.7rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
              xl: "1.2rem",
            },
            height: {
              xs: "2.1rem",
              sm: "2.5rem",
              md: "2.6rem",
              lg: "2.7rem",
              xl: "3rem",
            },
            width: {
              xs: "4.9rem",
              sm: "6.6rem",
              md: "7rem",
              lg: "7rem",
              xl: "8rem",
            },
            backgroundColor:
              variant === "outlined"
                ? "rgba(102, 140, 20, 0.2)"
                : theme.palette.primary.main,
            "&:hover": {
              color: variant ? theme.palette.primary.contrastText : null,
              backgroundColor:
                variant === "outlined" ? theme.palette.primary.main : null,
            },
          }}
        >
          {text}
        </Button>
      </CustomLink>
    </ThemeProvider>
  );
};
