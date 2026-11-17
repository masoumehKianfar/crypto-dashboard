import FooterComponent from "@/src/components/organisms/footer";
import HeaderComponent from "@/src/components/organisms/header";
import MarketTickerComponent from "@/src/components/organisms/market-ticker";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen">
      <HeaderComponent />

      <MarketTickerComponent />

      <div className="w-full px-2 lg:px-[100px] flex-1 pt-8 pb-2">
        {children}
      </div>

      <FooterComponent />
    </div>
  );
};

export default Layout;
