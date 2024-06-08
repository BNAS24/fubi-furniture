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
import Image from "next/image";
import Button from "@mui/material/Button";
import { useCart } from "@/app/_context/CartContext";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { useBodyStyle } from "@/app/_context/BodyStylesContext";
import Box from "@mui/material/Box";

// Utility function to determine container position
const getContainerPosition = ({
  menuOpen,
  searchButtonClicked,
  bagButtonClicked,
}: any) => {
  if (menuOpen) return "sticky";
  if (searchButtonClicked || bagButtonClicked) return "fixed";
  return "sticky";
};

// Custom hook for managing button states
const useButtonState = () => {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [bagButtonClicked, setBagButtonClicked] = useState(false);

  const { setBodyStyle } = useBodyStyle();
  const toggleSearchButton = () => setSearchButtonClicked(!searchButtonClicked);
  const toggleBagButton = () => setBagButtonClicked(!bagButtonClicked);

  return {
    searchButtonClicked,
    bagButtonClicked,
    toggleSearchButton,
    toggleBagButton,
    setBodyStyle,
  };
};

// Component for rendering cart items
const CartItem = ({ item, removeFromCart }: any) => (
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
      priority
      style={{ width: "100%", height: "auto" }}
      height={100}
      width={100}
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

export const TopNavBar = ({ handleMenu, menuOpen }: any) => {
  const {
    searchButtonClicked,
    bagButtonClicked,
    toggleSearchButton,
    toggleBagButton,
    setBodyStyle,
  } = useButtonState();
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    const searchElement = document.getElementById("site-search");
    if (searchElement) {
      searchElement.style.display = searchButtonClicked ? "flex" : "none";
    }
  }, [searchButtonClicked]);

  useEffect(() => {
    searchButtonClicked || bagButtonClicked
      ? setBodyStyle({
          display: "block",
          position: "fixed",
          inset: 0,
        })
      : setBodyStyle({
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          minHeight: "100vh",
          background: "var(--main-white)",
          overflowX: "hidden",
          fontFamily: "__Inter_aaf875, Roboto, sans-serif",
        });
  }, [searchButtonClicked, bagButtonClicked, setBodyStyle]);

  const bagOrSearchIconClicked = (arg: string) => {
    arg === "bag" ? toggleBagButton() : toggleSearchButton();
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
          position: getContainerPosition({
            menuOpen,
            searchButtonClicked,
            bagButtonClicked,
          }),
          padding: searchButtonClicked ? "8px 0 0 0" : "unset",
          inset: 0,
          height: searchButtonClicked || bagButtonClicked ? "100vh" : "64px",
          background: theme.palette.primary.main,
          // overflowX: "hidden",
          // overflowY: "auto",
          overflow: "hidden",
          zIndex: 99,
        }}
      >
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexShrink: 0,
            flexDirection: "row",
            justifyContent: searchButtonClicked ? "center" : "space-between",
            alignItems: "center",
            width: "100%",
            height: searchButtonClicked || bagButtonClicked ? "64px" : "100%",
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
              height: "64px",
            }}
          >
            <SearchButton
              clicked={toggleSearchButton}
              searchClicked={searchButtonClicked}
              bagButtonClicked={bagButtonClicked}
            />
            <BagButton
              bagClicked={toggleBagButton}
              searchClicked={searchButtonClicked}
            />
            <MenuButton
              handleMenu={handleMenu}
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
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            flexGrow: 1,
            display: bagButtonClicked ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            // height: "100%",
            width: "100%",
            overflowY: "auto",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              flexGrow: 1,
              // maxHeight: '100%',
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            {bagButtonClicked &&
              cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.product_id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
          </Container>
        </Container>
        {bagButtonClicked && cartItems.length > 0 && (
          <CheckoutButton closeBag={toggleBagButton} />
        )}
      </Container>
    </ThemeProvider>
  );
};
