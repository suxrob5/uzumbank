// images
import Scaner from "@/assets/scaner.png";
import Uzumbak from "@/assets/uzumbankBg.png";
import AppStore from "@/assets/appStore.svg";
import GooglePlay from "@/assets/googlePlay.svg";
import Image from "next/image";

const Bank = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mt-10 text-[48px] font-[600] text-[#7000FFFF]">
              Надежный банк <br /> всегда под рукой
            </h1>
            <p className="mt-10 text-xl text-[#383838FF]">
              Uzum Bank - это платежная система и надежный онлайн-банк <br /> в одном
              мобильном приложении.
            </p>
            <div className="relative mt-20 flex">
              <Image src={Scaner} alt="scaner" width={200} />
              <h1 className="opacity-0">
                ..................................................................................................
              </h1>
              <div className="absolute bottom-0 right-0 flex items-center justify-between">
                <a
                  target="blank"
                  href="https://apps.apple.com/us/app/uzum-bank-online/id1492307726?ign-itsct=apps_box_badge&ign-itscg=30200"
                >
                  <Image src={AppStore} alt="appstore" />
                </a>
                <a
                  className="mx-5"
                  target="blank"
                  href="https://play.google.com/store/apps/details?id=uz.kapitalbank.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1"
                >
                  <Image src={GooglePlay} alt="googleplay" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image src={Uzumbak} alt="uzum" width={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
