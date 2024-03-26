import React from "react";

const News = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-10">
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Yangiliklar
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              Hurmatli mijozlar! <br /> 02.02.2024 dan 03.02.2024 soat 10:00{" "}
              <br /> dan 10:00 ga qadar profilaktika ishlari <br />{" "}
              rejalashtirilgan, bu vaqt davomida Uzum <br /> Bank mobil ilovasi
              ishlamasligi <br /> mumkinligini bildiramiz. <br /> Biz bilan
              bo’lganingiz uchun rahmat 💜
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Yangiliklar
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              AJ «Uzum Bank» 2024-yil 16-yanvardan <br /> boshlab tariflardagi
              o’zgarishlar haqida <br /> xabar beradi
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-xl font-[500] text-[#7000FFFF]">
                Tariflar &gt;
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Yangiliklar
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              AJ «Uzum Bank» 2023-yil 24-dekabrdan <br /> boshlab tariflardagi
              o’zgarishlar haqida <br /> xabar beradi
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-xl font-[500] text-[#7000FFFF]">
                Tariflar &gt;
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
