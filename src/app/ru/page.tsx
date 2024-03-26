// components
import CurrencyCalculator from "@/components/ru/CurrencyCalculator";
import SaveOnTransfers from "@/components/ru/SaveOnTransfers";
import Bank from "@/components/ru/bank";
import Header from "@/components/ru/indHeader";
import Navbar from "@/components/ru/navbar";
import Uzum from "@/components/ru/uzum";
import PayToPhone from "@/components/ru/payToPhone";
import News from "@/components/ru/news";
import End from "@/components/ru/end";
import Footer from "@/components/ru/footer";

const Ru = () => {
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

export default Ru;
