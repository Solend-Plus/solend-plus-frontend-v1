export interface IGeneralInfoContext {
  assets: IAsset[];
}

export interface IAsset {
  name: string;
  symbol: string;
  logo?: string;
}

export interface IRawApyDataPoint {
  timestamp: string;
  data: {
    symbol: string;
    supplyApy: number;
    borrowApy: number;
  };
}
