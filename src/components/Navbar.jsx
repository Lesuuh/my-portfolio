import { BsMoon } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2">
      <p className="custom-font font-bold">
        Ueh-Kabari <span className="text-gradient">Lesuuh</span>
      </p>
      <div className="w-[36px] h-[36px] rounded-full bg-[#F2F5F9] cursor-pointer shadow flex justify-center items-center"><BsMoon /></div>
      
    </div>
  );
};
