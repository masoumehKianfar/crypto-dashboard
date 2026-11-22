"use client";

import { useFetchData } from "@/src/hooks/use-fetch-data";
import { TrendingCoin } from "@/src/types/global-type";
import { useQuery } from "@tanstack/react-query";

const TrendingCoinsComponent = () => {
  const { data } = useQuery({
    queryKey: ["trending"],
    queryFn: () => useFetchData({ path: "/search/trending", revalidate: 60 }),
  });
  console.log("dta", data);

  return (
    <div className="overflow-auto hide-scrollbar border border-light-primary-light dark:bg-dark-gray-dark rounded-md p-4 h-[1020px]">
      <p className="mb-6 text-subtitle ">trending</p>
      <div>
        {data?.coins?.map((coin: TrendingCoin) => (
          <div
            key={coin?.item?.coin_id}
            className="flex justify-between items-center mt-6"
          >
            <div className="flex items-center justify-center">
              <img
                src={coin?.item?.large}
                className="h-7 w-7 rounded-full mr-4 "
              />

              <div className="mb-4 ">
                <p className="text-sm mb-1 font-semibold">{coin?.item?.name}</p>
                <p className="text-caption  dark:text-dark-gray-light">
                  {coin?.item?.symbol}
                </p>
              </div>
            </div>

            <div>
              <p className="text-caption dark:text-dark-gray-light">
                #{coin?.item?.market_cap_rank}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinsComponent;
