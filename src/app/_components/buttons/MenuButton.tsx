import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import theme from "../../_styles/muiTheme";
import { navDir } from "../../_assets/navigation/navDirectory";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MenuButton() {
  const [open, setOpen] = useState<boolean>(false);

  // Define spring animation configuration
  const springs = useSpring({
    transform: open ? "translateX(0%)" : "translateX(100%)",
  });

  // Prevents scrolling when the nav side menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/*Sidebar nav component*/}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem 0.5rem",
        }}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.43998 3.83994C1.31277 3.83814 1.18647 3.86164 1.06842 3.90908C0.950371 3.95652 0.842926 4.02694 0.752331 4.11627C0.661737 4.20559 0.589798 4.31203 0.540696 4.42939C0.491594 4.54676 0.466309 4.67272 0.466309 4.79994C0.466309 4.92716 0.491594 5.05312 0.540696 5.17049C0.589798 5.28785 0.661737 5.39429 0.752331 5.48361C0.842926 5.57294 0.950371 5.64336 1.06842 5.6908C1.18647 5.73824 1.31277 5.76174 1.43998 5.75994H22.56C22.6872 5.76174 22.8135 5.73824 22.9315 5.6908C23.0496 5.64336 23.157 5.57294 23.2476 5.48361C23.3382 5.39429 23.4102 5.28785 23.4593 5.17049C23.5084 5.05312 23.5337 4.92716 23.5337 4.79994C23.5337 4.67272 23.5084 4.54676 23.4593 4.42939C23.4102 4.31203 23.3382 4.20559 23.2476 4.11627C23.157 4.02694 23.0496 3.95652 22.9315 3.90908C22.8135 3.86164 22.6872 3.83814 22.56 3.83994H1.43998ZM1.43998 11.0399C1.31277 11.0381 1.18647 11.0616 1.06842 11.1091C0.950371 11.1565 0.842926 11.2269 0.752331 11.3163C0.661737 11.4056 0.589798 11.512 0.540696 11.6294C0.491594 11.7468 0.466309 11.8727 0.466309 11.9999C0.466309 12.1272 0.491594 12.2531 0.540696 12.3705C0.589798 12.4879 0.661737 12.5943 0.752331 12.6836C0.842926 12.7729 0.950371 12.8434 1.06842 12.8908C1.18647 12.9382 1.31277 12.9617 1.43998 12.9599H22.56C22.6872 12.9617 22.8135 12.9382 22.9315 12.8908C23.0496 12.8434 23.157 12.7729 23.2476 12.6836C23.3382 12.5943 23.4102 12.4879 23.4593 12.3705C23.5084 12.2531 23.5337 12.1272 23.5337 11.9999C23.5337 11.8727 23.5084 11.7468 23.4593 11.6294C23.4102 11.512 23.3382 11.4056 23.2476 11.3163C23.157 11.2269 23.0496 11.1565 22.9315 11.1091C22.8135 11.0616 22.6872 11.0381 22.56 11.0399H1.43998ZM1.43998 18.2399C1.31277 18.2381 1.18647 18.2616 1.06842 18.3091C0.950371 18.3565 0.842926 18.4269 0.752331 18.5163C0.661737 18.6056 0.589798 18.712 0.540696 18.8294C0.491594 18.9468 0.466309 19.0727 0.466309 19.1999C0.466309 19.3272 0.491594 19.4531 0.540696 19.5705C0.589798 19.6879 0.661737 19.7943 0.752331 19.8836C0.842926 19.9729 0.950371 20.0434 1.06842 20.0908C1.18647 20.1382 1.31277 20.1617 1.43998 20.1599H22.56C22.6872 20.1617 22.8135 20.1382 22.9315 20.0908C23.0496 20.0434 23.157 19.9729 23.2476 19.8836C23.3382 19.7943 23.4102 19.6879 23.4593 19.5705C23.5084 19.4531 23.5337 19.3272 23.5337 19.1999C23.5337 19.0727 23.5084 18.9468 23.4593 18.8294C23.4102 18.712 23.3382 18.6056 23.2476 18.5163C23.157 18.4269 23.0496 18.3565 22.9315 18.3091C22.8135 18.2616 22.6872 18.2381 22.56 18.2399H1.43998Z"
            fill="white"
          />
        </svg>
      </Box>
      <animated.nav
        style={{
          ...springs,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "0 0",
        }}
      >
        <Box
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          sx={{
            flex: 1,
            height: "100%",
            backgroundColor: theme.palette.background.paper,
            backdropFilter: "blur(4px)",
          }}
        />
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "296px",
            height: "100%",
            padding: "1rem 1rem",
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <CloseIcon
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            sx={{
              alignSelf: "flex-end",
              fontSize: "2.5rem",
              color: theme.palette.primary.contrastText,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          />
          <Container
            disableGutters={true}
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              paddingY: "1.5rem",
            }}
          >
            {navDir.map((nav, index) => (
              <Link
                className="side-nav-link-decoration"
                key={index}
                href={`http://localhost:3000${nav.path}`}
                replace
              >
                <Typography
                  fontWeight={500}
                  sx={{
                    fontSize: "1.5rem",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {nav.title}
                </Typography>
              </Link>
            ))}
          </Container>
        </Container>
      </animated.nav>
    </>
  );
}
