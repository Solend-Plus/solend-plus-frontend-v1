import { NextPage } from "next";
import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Head from "next/head";
import { RESERVES } from "../../../src/Constants";
import ApyChart from "../../../src/Components/ApyChart";
// import { useGeneralInfoContext } from "../../../src/Contexts/GeneralInfo";

const Dashboard: NextPage = ({}) => {
  const [selectedAssetSymbol, setSelectedAssetSymbol] =
    React.useState<string>("SOL");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedAssetSymbol(newValue);
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        sx={{
          width: "90%",
          typography: "body1",
          maxWidth: "60rem",
          mx: "auto",
          mt: 4,
        }}
      >
        <TabContext value={selectedAssetSymbol}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {RESERVES.map((reserve) => (
                <Tab
                  key={reserve.symbol}
                  label={reserve.name}
                  value={reserve.symbol}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value={`${selectedAssetSymbol}`}>
            <ApyChart
              symbol={selectedAssetSymbol}
              from={"2022-08-13T12:00:11.000Z"}
              to={"2022-08-20T15:34:15.000Z"}
              interval={1}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Dashboard;
