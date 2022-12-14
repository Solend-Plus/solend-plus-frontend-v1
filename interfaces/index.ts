export interface IGeneralInfoContext {
  assets: IAsset[];
}

export interface IAsset {
  name: string;
  symbol: string;
  logo?: string;
}

export interface IRawApyDataPoint {
  timestamp: {
    year: number;
    month: number;
    day: number;
    hour: number;
  };
  data: {
    symbol: string;
    //!: to be replace by supplyApy for uniformity after api gets updated
    supplyAPY: number;
    borrowApy: number;
  };
}

export interface IApyChartDataset {
  labels: string[];
  supplyData: number[];
  borrowData: number[];
}
