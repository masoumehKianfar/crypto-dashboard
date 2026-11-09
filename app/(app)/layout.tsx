import FooterComponent from "@/src/components/organisms/footer";
import HeaderComponent from "@/src/components/organisms/header";
import MarketTickerComponent from "@/src/components/organisms/market-ticker";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <HeaderComponent />

      <MarketTickerComponent />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
        {children}
      </main>

      <FooterComponent />
    </div>
  );
};

export default Layout;
