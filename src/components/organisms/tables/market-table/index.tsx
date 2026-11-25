"use client";
import { useQuery } from "@tanstack/react-query";
import { useFetchData } from "@/src/hooks/use-fetch-data";
import { CoinMarket } from "@/src/types/global-type";
import { useState } from "react";
import SearchComponent from "@/src/components/molecules/search";
import TableMarketComponent from "./table";
import ListMarketComponent from "./list";

const MarketTableComponent = ({ page = 1, perPage = 50 }) => {
  const { data } = useQuery({
    queryKey: ["market"],
    queryFn: () =>
      useFetchData({
        path: `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=24h`,
        revalidate: 60,
      }),
  });

  const [inputValue, setInputValue] = useState("");

  const filteredCoins = inputValue
    ? data?.filter((item: CoinMarket) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()),
      )
    : data;

  const searchHandler = (searchInputValue: string) => {
    setInputValue(searchInputValue);
  };

  return (
    <div className="lg:dark:bg-dark-gray-dark w-full lg:p-4  lg:border border-light-primary-light rounded-lg">
      <p className="mb-8 text-light-primary-dark dark:text-dark-gray-lighter text-title p-2 lg:p-0 lg:mb-4">
        Top markets
      </p>

      <SearchComponent
        searchInputValue={inputValue}
        onSearch={searchHandler}
        placeHolder="search markets..."
        inputClassName="mb-4 lg:mb-6 lg:w-1/3 lg:px-2 py-4 lg:dark:bg-dark-gray-darker"
      />

      <div className="rounded-md border border-light-primary-light/50 overflow-hidden hidden lg:block">
        <TableMarketComponent coins={filteredCoins} />
      </div>

      <div className="lg:hidden">
        <ListMarketComponent coins={filteredCoins} />
      </div>
    </div>
  );
};

export default MarketTableComponent;
