import { FaCode } from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";

export const WhatIDoCard = () => {
  const cardData = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      text: "In my journey as a developer, I'm enthralled by the immense capabilities and adaptability that React brings to the table. I'm always eager to embark on new projects that leverage React, exploring inventive approaches to build high-performance, scalable, and user-friendly applications.`",
    },
    {
      id: 2,
      icon: <VscDebug />,
      title: "Testing and Debugging:",
      text: "As a frontend web developer, I ensure application stability and seamless user experiences through meticulous testing, precise debugging, and optimizing performance across browsers and devices. My commitment is to deliver robust, error-free applications.",
      changebg: true,
      iconColor: true,
    },
    {
      id: 3,
      icon: <MdOutlineWebStories />,
      title: "Responsive Design",
      text: "I prioritize responsive design principles to optimize websites and applications for diverse devices, ensuring a seamless user experience across various screen sizes. This approach guarantees that the content adapts fluidly, providing accessibility and functionality across the spectrum of devices.",
    },
  ];
  return (
    <div className="flex flex-col sm:grid lg:grid-cols-2 gap-5">
      {cardData.map((item) => {
        return (
          <div
            key={item.id}
            className={`${
              item.changebg === true ? "bg-bkg3" : "bg-bkg"
            } text-white flex flex-col md:flex-row flex-wrap gap-2 px-2 md:px-5 py-5 rounded-xl`}
          >
            <div className="flex flex-row items-center gap-2">
              <span
                className={`${
                  item.iconColor === true ? "text-yellow" : "text-red"
                } text-2xl`}
              >
                {item.icon}
              </span>
              <h3 className="text-xl font-bold poppinsfont">{item.title} </h3>
            </div>
            <p className=" font-medium text-base ralewayfont">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
