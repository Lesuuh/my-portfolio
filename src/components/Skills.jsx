export const Skills = () => {
  const skillsData = [
    "React.JS",
    "Tailwind",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "Figma",
  ];

  const softSkillsData = [
    "Time Management",
    "Mentorship",
    "Communication",
    "Flexibility",
  ];
  return (
    <div className="ralewayfont mt-5 text-base rounded-xl font-medium bg-bkg2 w-full py-10 px-3 gap-5 items-start grid lg:grid-cols-2">
      <div>
        {" "}
        <h2 className=" poppinsfont text-3xl font-medium">Work Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-5 ">
          {skillsData.map((skill) => {
            return (
              <p
                key={skill}
                className="bg-bkg3  flex justify-center items-center px-2 py-1 rounded-xl"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        {" "}
        <h2 className=" poppinsfont text-3xl font-medium">Soft Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-5 ">
          {softSkillsData.map((skill) => {
            return (
              <p
                key={skill}
                className="bg-bkg3 flex justify-center items-center px-2 py-1  rounded-xl"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
