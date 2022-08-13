import { ReactNode } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(2),
  },

  Layout: {
    backgroundColor: theme.palette.grey[300],
    width: "100%",
  },
}));

function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  return (
    <Box className={classes.Layout}>
      <Header />
      <Box sx={{ minHeight: "calc(90vh - 5rem)" }}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;
