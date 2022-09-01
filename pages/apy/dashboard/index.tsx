import { NextPage } from "next";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Head from "next/head";
import { RESERVES } from "../../../src/Constants";
import ApyChart from "../../../src/Components/ApyChart";
import BasicDateRangePicker from "../../../src/Components/DateRangePicker";
import IntervalSelect from "../../../src/Components/IntervalSelect";
// import { useGeneralInfoContext } from "../../../src/Contexts/GeneralInfo";

const Dashboard: NextPage = ({}) => {
  const [selectedAssetSymbol, setSelectedAssetSymbol] = useState<string>("SOL");

  const [fromDate, setFromDate] = useState<Dayjs | null>();
  const [toDate, setToDate] = useState<Dayjs | null>();
  const [interval, setInterval] = useState<string>("24");

  useEffect(() => {
    const to = new Date();
    const nowMilliseconds = to.getTime();
    const from = new Date(nowMilliseconds - 10 * 24 * 3600 * 1000);

    setToDate(dayjs(to.toISOString()));
    setFromDate(dayjs(from.toISOString()));
  }, []);

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
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BasicDateRangePicker
            value={fromDate}
            setValue={setFromDate}
            label="from"
          />
          <BasicDateRangePicker
            value={toDate}
            setValue={setToDate}
            label="to"
          />

          <IntervalSelect value={interval} setValue={setInterval} />
        </Box>
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
              from={fromDate?.toISOString()}
              to={toDate?.toISOString()}
              interval={Number(interval)}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Dashboard;
