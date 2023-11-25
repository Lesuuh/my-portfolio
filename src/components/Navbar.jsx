import { SiExpertsexchange } from "react-icons/si";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2">
      <p className="poppinsfont font-bold flex items-center">
        <SiExpertsexchange className={`text-white`} />
        <span></span>
      </p>

      {/* <div
        onClick={toggleTheme}
        className="w-[36px] h-[36px] rounded-full bg-[#F2F5F9] cursor-pointer shadow flex justify-center items-center"
      >
        {isDarkTheme ? <FaRegSun /> : <BsMoon />}
      </div> */}
    </div>
  );
};
