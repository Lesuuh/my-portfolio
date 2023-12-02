import { WhatIDoCard } from "./WhatIDoCard";

export const AboutMe = ({ darkTheme }) => {
  return (
    <div
      className={`bg-bkg2 text-white w-full h-full rounded-xl px-5 md:px-16 py-5`}
    >
      <h1 className="font-medium text-3xl poppinsfont">About Me</h1>
      <p className="mt-2  font-medium text-base ralewayfont">
        Hello there! Welcome to my portfolio! I am{" "}
        <span className="text-gradient font-bold">Lesuuh</span> I am an
        enthusiastic and adaptable frontend web developer with a strong passion
        for delving into the newest advancements in technology. My venture into
        the realm of web development has been an exciting journey. I am
        dedicated to continually improving my skills and staying abreast of
        emerging trends within the industry.
      </p>
      <h2 className="font-medium text-2xl poppinsfont mt-5 mb-5">What I do!</h2>
      <WhatIDoCard />
    </div>
  );
};
