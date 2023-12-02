import { HiOutlineAcademicCap } from "react-icons/hi";

export const Education = () => {

    const EduData = [
        {
            duration: "2019 - Present",
            course: "Mechanical Engineering",
            school: "Rivers State University, Portharcourt",

        },
        {
            duration: "2021 - 2022",
            course: "Frontend Engineering",
            school: "Harvoxx Tech Hub, Portharcourt",
            changeBg : true,

        }
    ]
  return (
    <div>
      <h1 className="flex flex-row items-center gap-2 text-2xl font-medium mt-5 mb-3 poppinsfont">
        <HiOutlineAcademicCap  className="text-red"/> Education
      </h1>
      <div className="flex flex-col gap-5  ralewayfont">
        {EduData.map((item)=> {
            return (
                <div key={item.course} className={`${item.changeBg === true ? "bg-bkg3" : "bg-bkg"} px-3 py-8 rounded-xl`}>
                    <small className="text-grayTextColor text-base">{item.duration}</small>
                    <h3 className="font-bold">{item.course}</h3>
                    <h3 className="font-medium">{item.school}</h3>
                </div>
            )
        })}
      </div>
    </div>
  );
};
