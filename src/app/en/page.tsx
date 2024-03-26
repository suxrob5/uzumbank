// components
import CurrencyCalculator from "@/components/en/CurrencyCalculator";
import SaveOnTransfers from "@/components/en/SaveOnTransfers";
import Bank from "@/components/en/bank";
import Header from "@/components/en/indHeader";
import Navbar from "@/components/en/navbar";
import Uzum from "@/components/en/uzum";
import PayToPhone from "@/components/en/payToPhone";
import News from "@/components/en/news";
import End from "@/components/en/end";
import Footer from "@/components/en/footer";

const En = () => {
  return (
    <>
      <div className="mx-auto max-w-[2000px]">
        <div className=" w-[100%] shadow-xl">
          <Header />
          <Navbar />
        </div>
        <main className="mx-auto mt-8 h-auto w-[80%]">
          <Bank />
          <div className="mt-10 h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>
          {/* uzum */}
          <Uzum />
          <div className="h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>
          {/* Currency calculator */}
          <CurrencyCalculator />
          <div className="h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>

          {/* SaveOnTransfers */}
          <SaveOnTransfers />
          <div className="mt-10 h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>
          {/* You only need a phone to pay */}

          <PayToPhone />
          <div className="mt-10 h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>
          {/* News */}
          <News />
          <div className="mt-[100px] h-[2px] w-[100%] max-w-[2000px] bg-[#F7F7F7FF]">
            <span className="opacity-0">.</span>
          </div>
          {/* END */}
          <End />
        </main>
          {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default En;
