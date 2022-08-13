export interface IGeneralInfoContext {
  assets: IAsset[];
}

export interface IAsset {
  name: string;
  symbol: string;
  logo?: string;
}
