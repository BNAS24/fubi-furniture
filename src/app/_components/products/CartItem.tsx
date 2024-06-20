import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";
import theme from "../../_styles/muiTheme";

// Component for rendering cart items
export const CartItem = ({ item, removeFromCart }: any) => (
  <Container
    // disableGutters={true}
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
        width: {
          xs: "100%", // 0px
          sm: "70%", // 600px
          md: "50%", // 900px
          lg: "40%", // 1200px
          xl: "40%", // 1536px
        },
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
          lg: "2.5rem", // 1200px
          xl: "3rem", // 1536px
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
          sm: "1.2rem", // 600px
          md: "1.4rem", // 900px
          lg: "1.5rem", // 1200px
          xl: "1.7rem", // 1536px
        },
      }}
    >
      {item.description}
    </Typography>
    <Typography
      sx={{
        fontSize: {
          xs: "1rem", // 0px
          sm: "1.1rem", // 600px
          md: "1.2rem", // 900px
          lg: "1.3rem", // 1200px
          xl: "1.4rem", // 1536px
        },
      }}
    >
      {`\$${item.price}`}
    </Typography>
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
