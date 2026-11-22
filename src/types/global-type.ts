export type CoinMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  sparkline_in_7d?: { price: number[] };
};

export type TrendingCoin = {
  item: {
    name: string;
    symbol: string;
    market_cap_rank: number;
    coin_id: number;
    large: string;
  };
};
