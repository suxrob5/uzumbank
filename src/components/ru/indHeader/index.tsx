// components
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  
  return (
    <header className="mx-auto w-[100%]">
      <div className="mx-auto flex w-[80%]  items-center justify-between py-10 border-b-2">
        {/* Header Left */}
        <HeaderLeft />
        {/* Header Left */}
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
