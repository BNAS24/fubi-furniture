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
    <Container
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        aspectRatio: "1/1",
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${item.image}`}
        alt={item.name}
        priority={true}
        quality={100}
        fill
        sizes="100w"
        style={{
          objectFit: "cover",
        }}
      />
    </Container>
    <Typography
      fontWeight={500}
      sx={{
        fontSize: {
          xs: "1.5rem", // 0px
          sm: "2rem", // 600px
          md: "2.5rem", // 900px
          lg: "3rem", // 1200px
          xl: "3.5rem", // 1536px
        },
      }}
    >
      {item.name}
    </Typography>
    <Typography
      align="center"
      sx={{
        fontSize: {
          xs: "1rem", // 0px
          sm: "1.5rem", // 600px
          md: "2rem", // 900px
          lg: "2.5rem", // 1200px
          xl: "3rem", // 1536px
        },
      }}
    >
      {item.description}
    </Typography>
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
