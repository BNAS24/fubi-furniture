import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";
import theme from "../../_styles/muiTheme";

// Component for rendering cart items
export const CartItem = ({ item, removeFromCart }: any) => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto",
      backgroundColor: "white",
      padding: "0 0 8px 0",
    }}
  >
    <Image
      src={
        `${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${item.image}` ||
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclarionhealthcare.com%2Fcategory%2Frare-diesease%2F&psig=AOvVaw08oOaZP4d9cPYCdn3Bm8m8&ust=1717307613000000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOix1MTbuYYDFQAAAAAdAAAAABAE"
      }
      alt={item.name || "Fubi furniture item"}
      priority={true}
      style={{ width: "100%", height: "auto" }}
      height={100}
      width={100}
      quality={100}
    />
    <Typography>{item.name}</Typography>
    <Typography align="center">{item.description}</Typography>
    <Typography>{`\$${item.price}`}</Typography>
    <Button
      disableElevation={true}
      onClick={() => removeFromCart(item.product_id)}
      sx={{
        color: theme.palette.error.dark,
      }}
    >
      Remove from cart
    </Button>
  </Container>
);
