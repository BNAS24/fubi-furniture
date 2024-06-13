import Link from "next/link";
import theme from "../../_styles/muiTheme";
import { styled } from '@mui/material/styles';

export const CustomLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }));