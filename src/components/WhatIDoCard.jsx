import { FaAppStore, FaChalkboardTeacher, FaCode } from "react-icons/fa";

export const WhatIDoCard = () => {
  const cardData = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      text: "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
    {
      id: 2,
      icon: <FaAppStore />,
      title: "App Development",
      text: "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
      changebg: true,
      iconColor: true,
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      title: "Mentorship",
      text: "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
    },
  ];
  return (
    <div className="flex flex-col sm:grid lg:grid-cols-2 gap-5">
      {cardData.map((item) => {
        return (
          <div
            key={item.id}
            className={`${
              item.changebg === true ? "bg-cardBg" : "bg-gray"
            }  flex flex-col md:flex-row flex-wrap gap-2 px-2 md:px-5 py-5 rounded-xl`}
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
            <p className=" text-black font-medium text-base ralewayfont">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
