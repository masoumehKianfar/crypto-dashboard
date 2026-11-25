import CardsComponent from "../../molecules/cards";
import TitleComponent from "../../molecules/header-title";
import MarketTableComponent from "../../organisms/tables/market-table";
import TrendingCoinsComponent from "../../organisms/trending-coins";

const OverviewComponent = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full">
      <div className="my-6 mx-2">
        <TitleComponent
          headTitle={
            "A professional crypto desk without writing a custom backend."
          }
          paragraph={
            "Market lists and SEO pages render on the server. Live prices stream from Binance in the browser. Watchlists stay on this device."
          }
          headTitleSize={`text-h3 lg:text-h2`}
          paragraphSize={`text-body lg:text-h4`}
        />
      </div>

      <div className="w-full mt-4 mb-10">
        <CardsComponent />
      </div>

      <div className="flex w-full lg:flex-row flex-col">
        <div className=" w-full lg:mr-4">
          <MarketTableComponent />
        </div>
        <div className=" w-full ">
          <TrendingCoinsComponent />
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
