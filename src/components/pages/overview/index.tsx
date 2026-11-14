import HeaderTitleComponent from "../../molecules/page-header";
import MarketTableComponent from "../../organisms/market-table";
import TrendingCoinsComponent from "../../organisms/trending-coins";

const OverviewComponent = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 mt-8 h-[500px] ml-16">
      <div className="">
        <HeaderTitleComponent
          headTitle={
            "A professional crypto desk without writing a custom backend."
          }
          paragraph={
            "Market lists and SEO pages render on the server. Live prices stream from Binance in the browser. Watchlists stay on this device."
          }
          headTitleSize={`text-h2`}
        />
      </div>

      <div className="flex space-x-2">
        <div className="border w-2/3">
          <MarketTableComponent />
        </div>
        <div className="border w-1/2">
          <TrendingCoinsComponent />
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
