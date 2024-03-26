import Image from "next/image";

import CardImg1 from "@/assets/cardImg1.png"
import CardImg2 from "@/assets/cardImg2.png"


const SaveOnTransfers = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <div>
          <h1 className="text-[32px] font-[700] text-[#7000FFFF]">
            O’tkazmalarda pul mablag’laringizni tejang va to’lovlardan <br />
            qo’shimcha daromad ishlang
          </h1>
        </div>
        {/* cards */}

        <div className="mt-10 grid grid-cols-2 gap-5">
          <div className="mt-[2px]">
            <Image src={CardImg1} alt="card img" />
          </div>
          <div>
            <Image src={CardImg2} alt="card img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveOnTransfers