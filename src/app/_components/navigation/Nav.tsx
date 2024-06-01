"use client";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import theme from "../../_styles/muiTheme";
import BagButton from "../buttons/BagButton";
import HomepageLogo from "../buttons/HomepageLogo";
import MenuButton from "../buttons/MenuButton";
import SearchButton from "../buttons/SearchButton";
import { getCart, removeFromCart } from "@/app/_helpers/cart/cart_update";
import Image from "next/image";
import { Product } from "@/app/products/[category]/page";
import Button from "@mui/material/Button";

export interface SearchPropTypes {
  clicked?: () => any;
  searchClicked: boolean;
  bagClicked?: () => any;
  bagButtonClicked?: boolean;
}

export const TopNavBar = () => {
  const [searchButtonClicked, setSearchButtonClicked] =
    useState<boolean>(false);
  const clicked = () => setSearchButtonClicked(!searchButtonClicked);

  const [bagButtonClicked, setBagButtonClicked] = useState<boolean>(false);
  const bagClicked = () => setBagButtonClicked(!bagButtonClicked);

  const [cartItems, setCartItems] = useState<Product[] | null>(null);

  useEffect(() => {
    const searchElement = document.getElementById("site-search");
    if (searchElement) {
      searchElement.style.display = searchButtonClicked ? "flex" : "none";
    }
  }, [searchButtonClicked, cartItems]);

  const bagOrSearchIconClicked = (arg: string) => {
    arg === "bag"
      ? setBagButtonClicked(!bagButtonClicked)
      : setSearchButtonClicked(!searchButtonClicked);

    //Get items from local storage
    const items: any = getCart();

    //Store items in state
    setCartItems([...items]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters={true}
        maxWidth={false}
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "sticky",
          paddingTop:
            searchButtonClicked || bagButtonClicked ? "1rem" : "unset",
          top: 0,
          height: searchButtonClicked || bagButtonClicked ? "100vh" : "64px",
          background: theme.palette.primary.main,
          zIndex: 99,
        }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: searchButtonClicked ? "center" : "space-between",
            alignItems: "center",
            width: "100%",
            height: searchButtonClicked || bagButtonClicked ? "unset" : "100%",
            padding: "0 16px",
          }}
        >
          <HomepageLogo
            searchClicked={searchButtonClicked}
            bagButtonClicked={bagButtonClicked}
          />
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent:
                searchButtonClicked || bagButtonClicked
                  ? "space-between"
                  : "flex-end",
              alignItems: "center",
              gap: searchButtonClicked ? "1rem" : "unset",
            }}
          >
            <SearchButton
              clicked={clicked}
              searchClicked={searchButtonClicked}
              bagButtonClicked={bagButtonClicked}
            />
            <BagButton
              bagClicked={bagClicked}
              searchClicked={searchButtonClicked}
            />
            <MenuButton
              searchClicked={searchButtonClicked}
              bagButtonClicked={bagButtonClicked}
            />
            <Typography
              align="center"
              sx={{
                display: bagButtonClicked ? "flex" : "none",
                color: theme.palette.primary.contrastText,
                padding: "0 0",
              }}
            >
              Review your cart
            </Typography>
            <Typography
              align="center"
              component="div"
              onClick={() =>
                bagOrSearchIconClicked(bagButtonClicked ? "bag" : "search")
              }
              fontWeight={500}
              sx={{
                display:
                  searchButtonClicked || bagButtonClicked ? "flex" : "none",
                color: theme.palette.primary.contrastText,
                padding: "0 0",
              }}
            >
              {searchButtonClicked ? "cancel" : "close"}
            </Typography>
          </Container>
        </Container>
        {bagButtonClicked &&
          cartItems &&
          cartItems.map((item: any) => (
            <Container
              key={item.product_id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "auto",
                backgroundColor: "white",
              }}
            >
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${item.image}` ||
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclarionhealthcare.com%2Fcategory%2Frare-diesease%2F&psig=AOvVaw08oOaZP4d9cPYCdn3Bm8m8&ust=1717307613000000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOix1MTbuYYDFQAAAAAdAAAAABAE"
                }
                alt={item.name || "Fubi furniture item"}
                priority
                style={{ width: "100%", height: "auto" }}
                height={100}
                width={100}
              />
              <Typography>{item.name}</Typography>
              <Typography align="center">{item.description}</Typography>
              <Typography>{item.price}</Typography>
              <Button onClick={() => removeFromCart(item.product_id)}>
                Remove from cart
              </Button>
            </Container>
          ))}
      </Container>
    </ThemeProvider>
  );
};
