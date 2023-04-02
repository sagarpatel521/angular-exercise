export interface SteelCoinPriceResponse{
    statusCode: number;
    payload: SteelCoinPrice;
}

export interface SteelCoinPrice {
    data: CoinPriceData[];
    from: string;
    to: string;
}

export interface CoinPriceData{
    date: string;
    buyPrice: number;
    sellPrice: number;
}

