import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";
import ResponsiveContainerchartComponent from "@/src/components/molecules/charts/responsive-container-chart";
import { CoinMarket } from "@/src/types/global-type";
import { compactUsdFormat } from "@/src/utils/compact-usd-format";
import { isPositiveChange } from "@/src/utils/is-positive-change";
import { usdFormats } from "@/src/utils/usd-formats";
import { tableHeader } from "./header-data";

interface TableMarketComponentProps {
  coins: CoinMarket[];
}

const TableMarketComponent = ({ coins }: TableMarketComponentProps) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {coins?.map((item: CoinMarket) => (
            <TableRow key={item.id} className="cursor-pointer">
              <TableCell>{item?.market_cap_rank}</TableCell>

              <TableCell>
                <div className="flex justify-start items-center">
                  <img className="w-8 h-8 mr-4" src={item?.image} />

                  <div className="flex flex-col justify-start items-start">
                    <p className="text-lg font-semibold">{item?.name}</p>

                    <p className="text-xs dark:text-dark-gray-light text-light-primary-dark">
                      {item?.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {usdFormats({ price: item?.current_price })}
              </TableCell>

              <TableCell>
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
              </TableCell>

              <TableCell>
                {compactUsdFormat({
                  value: item?.market_cap,
                })}
              </TableCell>

              <TableCell>{item?.total_volume}</TableCell>

              <TableCell>
                <ResponsiveContainerchartComponent
                  data={item?.sparkline_in_7d?.price ?? []}
                  positive={isPositiveChange({
                    value: item?.price_change_percentage_24h,
                  })}
                />
              </TableCell>

              <TableCell>
                <button>*</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableMarketComponent;
