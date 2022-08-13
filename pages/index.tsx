import type { NextPage } from "next";
import { Box } from "@mui/material";
import Link from "next/link";

const Home: NextPage = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "20rem",
        pt: 6,
        color: "black",
      }}
    >
      <Link href="/apy/dashboard">APY history dashboard</Link>
    </Box>
  );
};

export default Home;
