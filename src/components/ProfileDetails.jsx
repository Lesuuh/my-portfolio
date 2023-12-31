import { useState } from "react";
import { AboutMe } from "./AboutMe";
import { Resume } from "./Resume";
import { Buttons } from "./Buttons";
import { createContext } from "react";
import { Work } from "./Work";
import { Contact } from "./Contact";

export const Context = createContext();

export const ProfileDetails = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Context.Provider value={{ activeTab, setActiveTab }}>
      <div className=" flex flex-col md:mt-[150px] rounded-xl w-full ">
        <Buttons activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "home" && <AboutMe />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "work" && <Work />}
        {activeTab === "contact" && <Contact />}
      </div>
    </Context.Provider>
  );
};
