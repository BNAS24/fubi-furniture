import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <footer>
      <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
        Website Created By Brandon Bradley
      </Typography>
      </Container>
    </footer>
  );
};
