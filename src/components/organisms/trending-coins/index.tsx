"use client";

import { useFetchData } from "@/src/hooks/use-fetch-data";
import { useQuery } from "@tanstack/react-query";

const TrendingCoinsComponent = () => {
  const { data } = useQuery({
    queryKey: ["trending"],
    queryFn: () => useFetchData({ path: "/search/trending", revalidate: 60 }),
  });

  return (
    <div className="p-4">
      <p className="mb-8">trending</p>

      {data?.coins?.map((item) => (
        <div
          key={item?.item?.coin_id}
          className="flex justify-between items-center"
        >
          <div className="flex items-center">
            <img src={item?.item?.large} className="h-8 w-8 mr-4" />

            <div>
              <p>{item?.item?.name}</p>
              <p>{item?.item?.symbol}</p>
            </div>
          </div>

          <div>
            <p>{item?.item?.market_cap_rank}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoinsComponent;
