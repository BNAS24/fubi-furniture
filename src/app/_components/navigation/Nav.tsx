"use client"
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import brandLogo from "../../../../public/brand-logo-mobile.svg";
import theme from "../../_styles/muiTheme";
import { useRouter } from "next/navigation";
import MenuButton from "../buttons/MenuButton";
import BagButton from "../buttons/BagButton";
import SearchButton from "../buttons/SearchButton";

export const TopNavBar = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <div className="main-nav">
          <div className="brand-logo-container">
            <Image
              onClick={() => router.push("/")}
              alt="brand-logo"
              src={brandLogo}
              className="nav-logo"
            />
          </div>
          <div className="nav-controllers">
            <SearchButton />
            <BagButton />
            <MenuButton />
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};
