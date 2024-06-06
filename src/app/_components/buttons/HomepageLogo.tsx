import Box from "@mui/material/Box";
import theme from "../../_styles/muiTheme";
import Link from "next/link";

const HomepageLogo = ({ searchClicked, bagButtonClicked }: any) => {

  return (
    <Link
      href="/"
      style={{
        all: "unset",
      }}
    >
      <Box
        sx={{
          display: searchClicked || bagButtonClicked ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.25rem 0.25rem",
          backgroundColor: theme.palette.primary.light,
          borderRadius: "0.5rem",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <svg
          width={32}
          height={32}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.04 16H37.3333V9.77775C37.3333 8.8 36.5333 8 35.5556 8H4.44442C3.46667 8 2.66667 8.8 2.66667 9.77775V16H0.96C0.426667 16 0 16.4356 0 16.96V28.3644C0 28.8977 0.435583 29.3333 0.968917 29.3333H39.0312C39.5645 29.3333 40.0001 28.8977 40.0001 28.3644V16.96C40 16.4356 39.5644 16 39.04 16ZM4.44442 9.77775H35.5555V16H33.8488C33.3155 16 32.8888 16.4356 32.8888 16.96V21.3333H7.11108V16.9689C7.11108 16.4356 6.6755 16 6.14217 16H4.44442V9.77775ZM38.2223 27.5556H1.77775V17.7777H5.33333V21.3333H4.44442C3.9555 21.3333 3.5555 21.7333 3.5555 22.2222C3.5555 22.7112 3.9555 23.1112 4.44442 23.1112H35.5555C36.0444 23.1112 36.4444 22.7112 36.4444 22.2222C36.4444 21.7333 36.0444 21.3333 35.5555 21.3333H34.6667V17.7777H38.2223V27.5556Z"
            fill="white"
          />
          <path
            d="M8.889 30.2222H3.55566C3.06675 30.2222 2.66675 30.6222 2.66675 31.1111C2.66675 31.5999 3.06675 31.9999 3.55566 31.9999H8.889C9.37791 31.9999 9.77791 31.5999 9.77791 31.111C9.77783 30.6222 9.37783 30.2222 8.889 30.2222Z"
            fill="white"
          />
          <path
            d="M36.4444 30.2222H31.1111C30.6222 30.2222 30.2222 30.6222 30.2222 31.1111C30.2222 31.6 30.6222 32 31.1111 32H36.4444C36.9333 31.9999 37.3333 31.5999 37.3333 31.111C37.3333 30.6222 36.9333 30.2222 36.4444 30.2222Z"
            fill="white"
          />
        </svg>
      </Box>
    </Link>
  );
};
export default HomepageLogo;
