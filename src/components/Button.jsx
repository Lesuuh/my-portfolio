import { useContext } from "react";
import { Context } from "./ProfileDetails";

export const Button = ({ icon, text, to }) => {
  const {activeTab, setActiveTab} = useContext(Context);
  return (
    <div>
      <button
        onClick={() => setActiveTab(to)}
        className={`${
          activeTab === to ? "active" : ""
        } btn w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-xl flex flex-col justify-center items-center bg-bkg3 text-white ralewayfont text-sm font-bold `}
      >
        <span className="text-white text-xl">{icon}</span>
        <p>{text}</p>
      </button>
    </div>
  );
};
