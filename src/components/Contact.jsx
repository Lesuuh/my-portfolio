import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { ContactForm } from "./ContactForm";

export const Contact = () => {

  return (
    <div className="ralewayfont bg-bkg2 text-white w-full h-full rounded-xl px-5 md:px-16 py-5">
      <h1 className="font-medium text-3xl poppinsfont">Contact</h1>
      <div className="grid grid-cols mt-5 gap-5 lg:grid-cols-2">
        <div className=" poppinsfont bg-bkg3 px-3 py-8 rounded-xl gap-3 flex flex-row items-start ">
          <LuPhoneCall className="text-red text-xl" />
          <div>
            <h3 className="font-bold">Phone:</h3>
            <p className="font-medium">+2349075605471</p>
            <p className="font-medium">+2349067252273</p>
          </div>
        </div>
        <div className=" poppinsfont bg-bkg px-3 py-8 gap-3 rounded-xl flex flex-row items-start ">
          <MdOutlineMarkEmailUnread className="text-red text-xl" />
          <div>
            <h3 className="font-bold">Email:</h3>
            <p className="font-medium">lesuuh01@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-bkg3 px-5 rounded-xl py-5">
        <p>
          I am always open to discussing{" "}
          <span className="font-bold">
            new projects, opportunities in the tech world, partnerships,
            internships,
          </span>{" "}
          and, most importantly, <span className="font-bold">mentorship.</span>
        </p>
        <ContactForm/>
        
      </div>
    </div>
  );
};
