import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";


export const Resume = () => {


    
  return (
    <div className="bg-white w-full h-full rounded-xl px-5 md:px-16 py-5">
      <h1 className="font-medium text-3xl poppinsfont">Resume</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between gap-5">
        <Education/>
        <Experience/>
      </div>
      <Skills/>
      

    </div>
  );
};
