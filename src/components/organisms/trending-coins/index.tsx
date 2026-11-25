"use client";

import { Card, CardContent } from "@/shadcn/components/ui/card";
import { useFetchData } from "@/src/hooks/use-fetch-data";
import { TrendingCoin } from "@/src/types/global-type";
import { useQuery } from "@tanstack/react-query";

const TrendingCoinsComponent = () => {
  const { data } = useQuery({
    queryKey: ["trending"],
    queryFn: () => useFetchData({ path: "/search/trending", revalidate: 60 }),
  });

  return (
    <div className="overflow-auto hide-scrollbar lg:border light:bg-light-gray-dark lg:border-light-primary-light lg:dark:bg-dark-gray-dark lg:rounded-md p-4">
      <p className="mb-6 text-subtitle ">trending</p>
      {data?.coins?.map((coin: TrendingCoin) => (
        <Card
          key={coin?.item?.coin_id}
          className="lg:cursor-pointer mt-4 lg:mt-6 dark:bg-dark-gray-dark lg:border-none lg:dark:hover:bg-dark-primary-light/80"
        >
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center justify-center">
              <img
                src={coin?.item?.large}
                className="h-7 w-7 rounded-full mr-4 "
              />

              <div>
                <p className="text-label font-semibold">{coin?.item?.name}</p>
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrendingCoinsComponent;
