import Footer from "./footer";
import Header from "./header";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <div className="min-h-screen flex flex-col">
    <Header/>
    <main className="flex flex-col flex-1 items-center justify-center">{children}</main>
    <Footer/>
  </div>;
};

export default MarketingLayout;
