import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        backgroundColor: "var(--main-green)",
      }}
    >
      <Typography
        align="center"
        noWrap
        sx={{
          color: "white",
          fontSize: "16px",
        }}
      >
        Website created by Brandon Bradley
      </Typography>
    </Container>
  );
};
