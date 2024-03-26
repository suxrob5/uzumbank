import Uzum from "@/assets/login.svg";
import QrCode from "@/assets/qr-code.png";
import AppStore from "@/assets/appStore.svg";
import GooglePlay from "@/assets/googlePlay.svg";
import Image from "next/image";

const LoginRu = () => {
  return (
    <>
      <div className="mt-[80px] flex items-center justify-center">
        <Image src={Uzum} alt="uzum icon" />
      </div>
      <div className="mt-[80px] flex w-[100%] items-center justify-center">
        <div className="rounded-xl bg-gray-100">
          <div className="p-10 px-[60px]">
            <h1 className="text-center text-[32px] font-[700]">
              Access to the web <br /> version of Uzum Bank is <br /> limited
            </h1>
            <p className="text-center text-[18px]">
              Install the Uzum Bank application to make all <br /> transactions
            </p>
          </div>
          <div className="mx-auto w-[55%] bg-white p-8">
            <Image src={QrCode} alt="qr-code" />
          </div>
          <div className="mt-10">
            <p className="text-center text-2xl">Download Uzum Bank</p>
          </div>
          <div className="mt-10 flex items-center justify-center pb-[50px]">
            <a
              className="mx-5"
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
    </>
  );
};

export default LoginRu;
