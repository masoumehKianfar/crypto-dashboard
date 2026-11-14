import TickerDataComponent from "./ticker-data";

const MarketTickerComponent = () => {
  return (
    <div className="flex items-center justify-start h-[60px] py-2 px-4 border-b  border-light-gray-darker dark:border-dark-gray-light dark:bg-dark-gray-dark bg-light-gray-dark">
      <div className="text-[12px] dark:text-dark-gray-light text-light-primary-light border border-dark-gray-light rounded-[32px] py-1 px-2 mr-4">
        connecting
      </div>

      <TickerDataComponent title={"btc"} value={0} />
    </div>
  );
};

export default MarketTickerComponent;
