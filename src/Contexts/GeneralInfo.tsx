// import {
//   useMemo,
//   createContext,
//   ReactNode,
//   useEffect,
//   useContext,
//   useState,
// } from "react";
// import { IGeneralInfoContext, IAsset } from "../interfaces";
// import { clusterApiUrl, Connection } from "@solana/web3.js";
// import { SolendMarket } from "@solendprotocol/solend-sdk";

// const endpoint = clusterApiUrl("mainnet-beta");
// const connection = new Connection(endpoint, "confirmed");

// interface GeneralInfoProps {
//   children: ReactNode | ReactNode[];
// }

// const initialContextValue = {
//   assets: ,
// };

// const GeneralInfoContext =
//   createContext<IGeneralInfoContext>(initialContextValue);

// function GeneralInfo({ children }: GeneralInfoProps) {
//   const [assets, setAssets] = useState<IAsset[]>([]);

// useEffect(() => {
//   const updateGeneralInfo = async () => {
//     console.log(endpoint);
//     console.log(connection);
//     const market = await SolendMarket.initialize(connection);
// await market.loadReserves();
// await market.loadRewards();

// const fetchedAssets = market.reserves.map((res) => ({
//   name: res.config.name,
//   symbol: res.config.symbol,
//   // logo: res.config.logo as string,
// }));

// setAssets(fetchedAssets);
// };

//     updateGeneralInfo();
//   }, [assets]);

//   const contextValue = useMemo(
//     () => ({
//       assets,
//     }),
//     [assets]
//   );

//   return (
//     <GeneralInfoContext.Provider value={contextValue}>
//       {children}
//     </GeneralInfoContext.Provider>
//   );
// }

// export function useGeneralInfoContext() {
//   return useContext(GeneralInfoContext);
// }

// export default GeneralInfo;
