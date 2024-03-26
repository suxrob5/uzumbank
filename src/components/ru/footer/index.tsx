import Link from "next/link";
import React from "react";
// images
import End from "@/assets/endRu.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#7000FFFF] p-10">
        <div className="mx-auto flex w-[80%] justify-between text-xl text-white">
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Продукты</Link>
            </li>
            <li className="p-1">
              <Link href="#">Пластиковые карты</Link>
            </li>
            <li className="p-1">
              <Link href="#">Кредитные продукты</Link>
            </li>
            <li className="p-1">
              <Link href="#">Вклады</Link>
            </li>
            <li className="p-1">
              <Link href="#">Счета</Link>
            </li>
            <li className="p-1">
              <Link href="#">Кошельки</Link>
            </li>
            <li className="p-1">
              <Link href="#">Денежные переводы</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Сервисы</Link>
            </li>
            <li className="p-1">
              <Link href="#">Мой дом</Link>
            </li>
            <li className="p-1">
              <Link href="#">UzASBO</Link>
            </li>
            <li className="p-1">
              <Link href="#">HUMO Pay</Link>
            </li>
            <li className="p-1">
              <Link href="#">Перевод по реквизитам</Link>
            </li>
            <li className="p-1">
              <Link href="#">Оплата гос. садов</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">О банке</Link>
            </li>
            <li className="p-1">
              <Link href="#">Структура банка</Link>
            </li>
            <li className="p-1">
              <Link href="#">Руководство</Link>
            </li>
            <li className="p-1">
              <Link href="#">Реквизиты банка</Link>
            </li>
            <li className="p-1">
              <Link href="#">Устав банка</Link>
            </li>
            <li className="p-1">
              <Link href="#">Государственные символики</Link>
            </li>
            <li className="p-1">
              <Link href="#">Существенные факты</Link>
            </li>
            <li className="p-1">
              <Link href="#">Локальные акты</Link>
            </li>
            <li className="p-1">
              <Link href="#">Стратегия развития</Link>
            </li>
            <li className="p-1">
              <Link href="#">Миссия Банка</Link>
            </li>
            <li className="p-1">
              <Link href="#">Документы</Link>
            </li>
            <li className="p-1">
              <Link href="#">Лицензия АО “Uzum Bank”</Link>
            </li>
            <li className="p-1">
              <Link href="#">Мероприятия</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">
                Акционерам и <br /> инвесторам
              </Link>
            </li>

            <li className="p-1">
              <Link href="#">Собрание акционеров</Link>
            </li>
            <li className="p-1">
              <Link href="#">Аудиторская проверка</Link>
            </li>
            <li className="p-1">
              <Link href="#">Сведения о дивидендах</Link>
            </li>
            <li className="p-1">
              <Link href="#">Аффилированные лица</Link>
            </li>
            <li className="p-1">
              <Link href="#">Выпуск ценных бумаг</Link>
            </li>
            <li className="p-1">
              <Link href="#">Бизнес план</Link>
            </li>
            <li className="p-1">
              <Link href="#">Корпоративное управление</Link>
            </li>
            <li className="p-1">
              <Link href="#">Финансовые показатели</Link>
            </li>
            <li className="p-1">
              <Link href="#">Акции</Link>
            </li>
            <li className="p-1">
              <Link href="#">Раскрытие информации</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Электронная почта</Link>
            </li>
            <li className="p-1">
              <Link href="#">info@uzumbank.uz</Link>
            </li>
            <li className="px-1 py-4 text-[18px] font-[600]">
              <Link href="#">Интерактивные услуги</Link>
            </li>
            <li>
              <Link href="#">Обращения физических и <br /> юридических лиц</Link>
            </li>
          </ul>
        </div>
      </footer>
      <div>
        <Image src={End} alt="" />
      </div>
    </div>
  );
};

export default Footer;
