import React from "react";

const News = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 gap-10">
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Новости
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              Уважаемые клиенты! <br /> Уведомляем Вас, что с <br /> 02.02.2024
              с 10:00 до 10:00 03.02.2024 <br /> запланированы профилактические{" "}
              <br /> работы, во время которых, может быть <br /> недоступно
              мобильное приложение <br /> Uzum Bank. Спасибо, что вы с нами 💜
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Новости
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              АО «Uzum Bank» сообщает об <br /> изменениях в тарифной линейке с
              16 <br /> января 2024 года
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-xl font-[500] text-[#7000FFFF]">
                Тарифы &gt;
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-[#E1E5FFFF]">
          <div className="p-5">
            <button className="rounded-lg bg-white px-5 py-3 text-xl hover:bg-gray-200">
              Новости
            </button>
            <p className="mt-5 text-xl font-[400] text-gray-500">
              АО «Uzum Bank» сообщает об <br /> изменениях в тарифной линейке со 24 <br />
              декабря 2023 года
            </p>
            <a href="https://uzumbank.uz/en/tariffs">
              <button className="mt-5 text-xl font-[500] text-[#7000FFFF]">
                Тарифы &gt;
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
