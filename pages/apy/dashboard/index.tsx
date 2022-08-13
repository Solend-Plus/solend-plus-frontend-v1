import { NextPage } from "next";
import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Head from "next/head";
import { RESERVES } from "../../../src/Constants";
// import { useGeneralInfoContext } from "../../../src/Contexts/GeneralInfo";

const Dashboard: NextPage = ({}) => {
  const [selectedAsset, setSelectedAsset] = React.useState<string>("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedAsset(newValue);
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={selectedAsset}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {RESERVES.map((reserve) => (
                <Tab
                  key={reserve.symbol}
                  label={reserve.name}
                  value={reserve.symbol}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel value={`${selectedAsset}`}>Item {selectedAsset}</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Dashboard;
