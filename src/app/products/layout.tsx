import styles from "./page.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["products-body"]}>
    {children}
    </div>
  );
}
