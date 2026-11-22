"use client";
import { useQuery } from "@tanstack/react-query";
import { tableHeader } from "./table-header-data";
import { useFetchData } from "@/src/hooks/use-fetch-data";
import { usdFormats } from "@/src/utils/usd-formats";
import { compactUsdFormat } from "@/src/utils/compact-usd-format";
import ResponsiveContainerchartComponent from "../../molecules/charts/responsive-container-chart";
import { isPositiveChange } from "@/src/utils/is-positive-change";
import { CoinMarket } from "@/src/types/global-type";
import { useState } from "react";
import SearchComponent from "../../molecules/search";

const MarketTableComponent = ({ page = 1, perPage = 12 }) => {
  const { data } = useQuery({
    queryKey: ["market"],
    queryFn: () =>
      useFetchData({
        path: `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=24h`,
        revalidate: 60,
      }),
  });

  const [value, setValue] = useState("");

  const filteredCoins = data?.filter(
    (item: CoinMarket) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ?? [],
  );

  const searchHandler = (searchInputValue: string) => {
    setValue(searchInputValue);
  };

  return (
    <div className="dark:bg-dark-gray-dark w-full p-4 border border-light-primary-light rounded-lg">
      <p className="mb-4 text-light-primary-dark dark:text-dark-gray-lighter text-subtitle">
        Top markets
      </p>

      <SearchComponent
        searchInputValue={value}
        onSearch={searchHandler}
        placeHolder="search markets..."
        inputClassName="mb-6 w-1/3 border dark:border-dark-primary-lighter border-light-primary-light rounded-lg h-[32px] px-2 py-4 text-sm dark:bg-dark-gray-darker  "
      />

      <div className="rounded-lg border border-light-primary-light/50">
        <table className="w-full  min-w-[820px] text-left text-sm ">
          <thead>
            <tr className=" border-b border-light-primary-light/50 ">
              {tableHeader.map((header, index) => (
                <th
                  className="px-4 py-4 text-lg dark:text-dark-gray-light text-light-primary-dark"
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredCoins?.map((item: CoinMarket) => (
              <tr
                key={item.id}
                className="border-y border-b-0 border-light-primary-light/50"
              >
                <td className="px-4 py-3">{item?.market_cap_rank}</td>

                <td className="px-2 py-3">
                  <div className="flex justify-start items-center">
                    <img className="w-8 h-8 mr-4" src={item?.image} />

                    <div className="flex flex-col justify-start items-start">
                      <p className="text-lg font-semibold">{item?.name}</p>

                      <p className="text-xs dark:text-dark-gray-light text-light-primary-dark">
                        {item?.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">
                  {usdFormats({ price: item?.current_price })}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 inline-block w-16 text-center text-xs
                      ${
                        isPositiveChange({
                          value: item?.price_change_percentage_24h,
                        })
                          ? "dark:bg-dark-success-light/20 dark:text-dark-success-light bg-light-success-light/20 text-light-success-light"
                          : "dark:bg-dark-error-light/20 dark:bg-dark-error-light bg-light-error-light/20 text-light-error-light"
                      }`}
                  >
                    {compactUsdFormat({
                      value: item?.price_change_percentage_24h,
                    })}
                  </span>
                </td>

                <td className="px-4 py-3">
                  {compactUsdFormat({
                    value: item?.market_cap,
                  })}
                </td>

                <td className="px-4 py-3">{item?.total_volume}</td>

                <td className="px-4 py-3">
                  <ResponsiveContainerchartComponent
                    data={item?.sparkline_in_7d?.price ?? []}
                    positive={isPositiveChange({
                      value: item?.price_change_percentage_24h,
                    })}
                  />
                </td>

                <td className="px-4 py-3">
                  <button>*</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTableComponent;
