"use client";
import { useCart } from "@/app/_context/CartContext";
import { useButtonState } from "@/app/_customhooks/useButtonState";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomLink } from "../../_components/misc/CustomLink";
import { updateContainerPosition } from "../../_helpers/updateContainerPosition";
import theme from "../../_styles/muiTheme";
import BagButton from "../buttons/BagButton";
import { CheckoutButton } from "../buttons/CheckoutButton";
import HomepageLogo from "../buttons/HomepageLogo";
import MenuButton from "../buttons/MenuButton";
import SearchButton from "../buttons/SearchButton";
import { CartItem } from "../products/CartItem";

export const TopNavBar = ({ handleMenu, menuOpen }: any) => {
  const [bagPopulated, setBagPopulated] = useState(false);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const {
    searchButtonClicked,
    bagButtonClicked,
    toggleSearchButton,
    toggleBagButton,
    setBodyStyle,
  } = useButtonState();

  // Extracts cart items from the cart context
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    const searchElement = document.getElementById("site-search");
    if (searchElement) {
      searchElement.style.display = searchButtonClicked ? "flex" : "none";
    }
  }, [searchButtonClicked]);

  // Alters the body's style based on navigation state changes
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

  useEffect(() => {
    cartItems.length > 0 ? setBagPopulated(true) : setBagPopulated(false);
  }, [cartItems]);

  const handleSearchText = (event: any) => {
    setSearchText(event.target.value);
  };

  // Nav bar fetching results from search input functionality
  useEffect(() => {
    // Define a variable to hold the timeout ID
    let timeoutId: NodeJS.Timeout;

    const fetchSearchResults = async () => {
      if (searchText.trim() !== "") {
        try {
          // Clear the previous timeout to prevent multiple fetches
          clearTimeout(timeoutId);

          // Set a new timeout to delay the fetch
          timeoutId = setTimeout(async () => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_DOMAIN}/api/search?query=${searchText}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (!response.ok) {
              throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setSearchResults(data.results[0].hits); // Adjust based on your API response structure
          }, 500); // Adjust the delay time (in milliseconds) as needed
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]); // Clear results if search text is empty
      }
    };

    fetchSearchResults();
    // Cleanup function to clear the timeout when the component unmounts or when searchText changes
    return () => clearTimeout(timeoutId);

    // Dependency array including searchText to trigger the effect when searchText changes
  }, [searchText]);

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
          position: updateContainerPosition({
            menuOpen,
            searchButtonClicked,
            bagButtonClicked,
          }),
          padding: searchButtonClicked ? "8px 0 0 0" : "unset",
          inset: 0,
          height: searchButtonClicked || bagButtonClicked ? "100%" : "64px",
          background: theme.palette.primary.main,
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
              value={searchText}
              handleSearchText={handleSearchText}
            />
            <BagButton
              bagClicked={toggleBagButton}
              searchClicked={searchButtonClicked}
              bagPopulated={bagPopulated}
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor:
                cartItems.length > 0 ? "white" : theme.palette.primary.main,
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
            {cartItems.length === 0 && (
              <Typography
                variant="h3"
                align="center"
                sx={{
                  color: "white",
                }}
              >
                Your cart is currently empty
              </Typography>
            )}
          </Container>
        </Container>

        {bagButtonClicked && cartItems.length > 0 && (
          <CheckoutButton closeBag={toggleBagButton} />
        )}

        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            display: searchButtonClicked ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            paddingY: "16px",
            overflowY: "auto",
            backgroundColor: theme.palette.primary.contrastText,
          }}
        >
          {searchButtonClicked &&
            searchResults &&
            searchResults.map((result) => (
              <CustomLink
                key={result.objectID}
                href={`/products/${result.category}?item=${result.objectID}`}
                onClick={toggleSearchButton}
                sx={{
                  width: "100%",
                }}
              >
                <Container
                  disableGutters={true}
                  maxWidth={false}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DOMAIN}/Furniture/${result.image}`}
                    alt={result.name}
                    height={70}
                    width={70}
                  />
                  <Container maxWidth={false}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.common.black,
                      }}
                    >
                      {result.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.common.black,
                      }}
                    >
                      {result.description}
                    </Typography>
                  </Container>
                </Container>
              </CustomLink>
            ))}
        </Container>
      </Container>
    </ThemeProvider>
  );
};
