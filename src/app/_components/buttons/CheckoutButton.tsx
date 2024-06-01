import Button from "@mui/material/Button";
import Link from "next/link";

interface CheckoutButtonProps {
  closeBag: () => void;
}

export const CheckoutButton = ({ closeBag }: CheckoutButtonProps) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/checkout`}>
      <Button
        onClick={() => closeBag()}
        variant="contained"
        fullWidth={true}
        disableElevation={true}
        sx={{
          color: "var(--main-white)",
        }}
      >
        Proceed To Checkout
      </Button>
    </Link>
  );
};
