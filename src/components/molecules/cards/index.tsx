"use client";

import { useFetchData } from "@/src/hooks/use-fetch-data";
import { useQuery } from "@tanstack/react-query";
import CardInfo from "./card";
import { compactUsdFormat } from "@/src/utils/compact-usd-format";
import { perscentFormat } from "@/src/utils/percent-format";

const CardsComponent = () => {
  const { data } = useQuery({
    queryKey: ["global"],
    queryFn: () => useFetchData({ path: "/global", revalidate: 60 }),
  });

  return (
    <div className="flex lg:flex-row flex-col w-full">
      <CardInfo
        title="Market cap"
        value={compactUsdFormat({ value: data?.data?.total_market_cap?.usd })}
      />

      <CardInfo
        title="24h volume"
        value={compactUsdFormat({ value: data?.data?.total_volume?.usd })}
      />

      <CardInfo
        title="BTC dominance"
        value={`${data?.data?.market_cap_percentage?.btc?.toFixed(1) ?? 0}%`}
      />

      <CardInfo
        title="Cap change 24h"
        value={perscentFormat({
          value: data?.data?.market_cap_change_percentage_24h_usd,
        })}
      />
    </div>
  );
};

export default CardsComponent;
