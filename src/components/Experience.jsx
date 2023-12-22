import { FaStar } from "react-icons/fa";

export const Experience = () => {
  const ExpData = [
    {
      duration: "2022 - 2023",
      position: "Frontend Web Developer",
      company: "Homigon - Harvoxx Tech Hub, Portharcourt",
      changeBg: true,
    },
    // {
    //   duration: "2022 - 2023",
    //   position: "Chief Technology Officer ",
    //   company: "Homigon",
    // },
  ];
  return (
    <div>
      <h1 className="flex flex-row items-center gap-2 text-2xl font-medium mt-5 mb-3 poppinsfont">
        <FaStar className="text-red" /> Experience
      </h1>
      <div className="flex flex-col gap-5 ralewayfont">
        {ExpData.map((item) => {
          return (
            <div
              key={item.position}
              className={`${
                item.changeBg === true ? "bg-bkg" : "bg-bkg3"
              } px-3 py-8 rounded-xl`}
            >
              <small className="text-grayTextColor text-base">
                {item.duration}
              </small>
              <h3 className="font-bold">{item.position}</h3>
              <h3 className="font-medium">{item.company}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
