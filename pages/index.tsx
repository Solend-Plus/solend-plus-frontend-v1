import type { NextPage } from "next";
import { Box } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
    </>
  );
};

export default Home;
