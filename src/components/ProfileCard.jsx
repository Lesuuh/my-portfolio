import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import profilePicture from "/images/profile picture.png";
import { MdOutlineFileDownload, MdOutlinePhoneIphone } from "react-icons/md";

export const ProfileCard = () => {
  return (
    <div className="max-w-[300px] w-full flex-col flex items-center justify-between bg-white mt-[150px] px-[16px] py-5 mb-16 rounded-xl">
      <div>
        <img src={profilePicture} alt="profile-picture" className="-mt-[50%]" />
      </div>
      <h3 className=" ralewayfont text-base md:text-xl lg:text-2xl font-bold">
        Ueh-Kabari Lesuuh
      </h3>
      <p className="ralewayfont text-grayTextColor text-base font-medium">Frontend Developer</p>
      <div className="social-links"></div>

      <div className=" ralewayfont flex flex-col gap-5 w-full bg-gray rounded-xl px-5 my-5 py-5">
        <div className="flex flex-row items-center gap-5 pb-3 border-b-[1px] border-lineColor">
          <MdOutlinePhoneIphone className="text-gradient text-[#ed250a] text-xl" />
          <div className="flex flex-col items-start justify-start">
            <small className="text-grayTextColor text-base">Phone</small>
            <p className="font-bold">+2349075605471</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5 pb-3 border-b-[1px] border-lineColor">
          <FaRegEnvelopeOpen className="text-gradient text-[#ff9c1a] text-xl" />
          <div className="flex flex-col items-start justify-start">
            <small className="text-grayTextColor text-base">Email</small>
            <p className="font-bold">lesuuh01@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5 pb-3 border-b-[1px] border-lineColor">
          <IoLocationOutline className="text-gradient text-[#ed250a] text-xl" />
          <div className="flex flex-col items-start justify-start">
            <small className="text-grayTextColor text-base">Location</small>
            <p className="font-bold">Portharcourt, Nigeria</p>
          </div>
        </div>
        <button className="btn-download rounded-xl py-2 font-bold flex items-center justify-center gap-2 text-white">
          <MdOutlineFileDownload className="text-2xl" />
          Download Resume
        </button>
      </div>
    </div>
  );
};
