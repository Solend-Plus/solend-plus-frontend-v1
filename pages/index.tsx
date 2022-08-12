import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { Box } from "@mui/material";

interface HomeProps {
  data: any;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return <Box>{data}</Box>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: "hello",
    },
  };
};
