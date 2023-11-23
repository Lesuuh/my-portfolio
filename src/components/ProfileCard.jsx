import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
// import profilePicture from "/images/profile picture.png";
import profilePicture from "/images/IMG_7026.png"
import { MdOutlineFileDownload, MdOutlinePhoneIphone } from "react-icons/md";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";

export const ProfileCard = () => {
  const githubRepo = "https://github.com/Lesuuh";
  const facebook = "https://facebook.com/lesuuh.uehkabari"
  const linkedin = "https://www.linkedin.com/in/lesuuh/"
  const twitter = "https://twitter.com/UKLesuuh"
  return (

      <div className="max-w-[300px] w-full flex-col flex items-center justify-between bg-white mt-[150px] px-[16px] py-5 mb-16 rounded-xl">
        <div className="w-[200px]  ">
          <img
            src={profilePicture}
            alt="profile-picture"
            className="-mt-[50%] w-full h-[200px] rounded-xl bg-contain bg-center"
          />
        </div>
        <h3 className=" ralewayfont mt-2 text-xl md:text-xl lg:text-2xl font-bold">
          Ueh-Kabari Lesuuh
        </h3>
        <p className="ralewayfont text-grayTextColor text-base font-medium">
          Frontend Developer
        </p>
        <div className="social-links flex gap-2 flex-row justify-between items-center w-full px-5 py-5">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-gray flex justify-center items-center rounded-xl"
          >
            <FaFacebookF className="text-[#1877F2]" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-gray flex justify-center items-center rounded-xl"
          >
            <FaLinkedinIn className="text-[#0077B5]" />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-gray flex justify-center items-center rounded-xl"
          >
            <FaTwitter className="text-[#1DA1F2]" />
          </a>
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-gray flex justify-center items-center rounded-xl"
          >
            <FaGithub />
          </a>
        </div>

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
