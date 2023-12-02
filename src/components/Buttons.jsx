import { FaHome } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { Button } from "./Button";

export const Buttons = () => {
  const buttonData = [
    {
      id: 1,
      icon: <FaHome />,
      text: "Home",
      to: "home",
    },
    {
      id: 2,
      icon: <IoNewspaperOutline />,
      text: "Resume",
      to: "resume",
    },
    {
      id: 3,
      icon: <IoMdBriefcase />,
      text: "Work",
      to: "work",
    },
    {
      id: 4,
      icon: <TiContacts />,
      text: "Contact",
      to: "contact",
    },
  ];
  return (
    <div className="flex flex-row bg-bkg2 px-2 py-3 rounded-xl md:gap-5 items-center  md:self-end justify-between md:-mt-[100px] md:w-[400px]">
      {buttonData.map((btnData) => {
        return (
          <Button
            key={btnData.id}
            icon={btnData.icon}
            text={btnData.text}
            to={btnData.to}

          />
        );
      })}
    </div>
  );
};
