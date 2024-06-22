// "use client";
import Container from "@mui/material/Container";

interface LayoutProps {
  children: React.ReactNode;
  params: { category: string };
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
      }}
    >
      {children}
    </Container>
  );
};