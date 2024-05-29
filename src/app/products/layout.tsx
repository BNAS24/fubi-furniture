import Container from "@mui/material/Container";

interface LayoutProps {
  children: React.ReactNode;
  params: { category: string };
}

export default function Layout({ children, params }: LayoutProps) {
  console.log("params", params);
  return (
    <Container disableGutters={true} maxWidth={false}>
      {children}
    </Container>
  );
}
