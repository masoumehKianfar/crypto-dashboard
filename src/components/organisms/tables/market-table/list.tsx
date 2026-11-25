import { Card, CardContent } from "@/shadcn/components/ui/card";
import { CoinMarket } from "@/src/types/global-type";
import { compactUsdFormat } from "@/src/utils/compact-usd-format";
import { isPositiveChange } from "@/src/utils/is-positive-change";
import { usdFormats } from "@/src/utils/usd-formats";

interface ListMarketComponentProps {
  coins: CoinMarket[];
}

const ListMarketComponent = ({ coins }: ListMarketComponentProps) => {
  return (
    <>
      {coins?.map((item: CoinMarket) => (
        <Card
          key={item.id}
          className="mb-2 border rounded-md border-light-primary-light shadow-md p-2 w-full "
        >
          <CardContent className="w-full p-2 ">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center text-sm font-bold shadow-inner shadow-black/20 bg-light-gray-darker text-light-primary-dark dark:bg-dark-gray-lighter dark:text-dark-primary-lighter  w-full mb-2 rounded-lg py-1">
                {item?.symbol.toUpperCase()}
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="flex justify-start items-center mr-4">
                  <img className="w-8 h-8 mr-2" src={item?.image} />

                  <div className="flex flex-col justify-start items-start">
                    <div className="flex justify-between items-center">
                      <p className="text-md font-semibold">{item?.name}</p>
                    </div>

                    <p className="text-lg mb-2 ">
                      {usdFormats({ price: item?.current_price })}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm gap-2">
                  <p className="flex flex-col justify-center items-center">
                    <span>24h</span>

                    <span
                      className={`rounded-full px-2 py-1 
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
                  </p>

                  <p className="flex flex-col justify-center items-center">
                    <span>Cap</span>

                    <span className="px-2 py-1">
                      {compactUsdFormat({
                        value: item?.market_cap,
                      })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ListMarketComponent;
