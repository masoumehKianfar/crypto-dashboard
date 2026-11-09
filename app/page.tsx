import HeaderComponent from "@/src/components/organisms/header";
import OverViewPage from "./(app)/overview/page";
import FooterComponent from "@/src/components/organisms/footer";
import MarketTickerComponent from "@/src/components/organisms/market-ticker";

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <MarketTickerComponent />
      <OverViewPage />
      <FooterComponent />
    </div>
  );
};

export default Home;
