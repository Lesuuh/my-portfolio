import { WhatIDoCard } from "./WhatIDoCard";

export const AboutMe = () => {

    
  return (
    <div className="bg-white w-full h-full rounded-xl px-5 md:px-16 py-5">
      <h1 className="font-medium text-3xl poppinsfont">About Me</h1>
      <p className="mt-2 text-black font-medium text-base ralewayfont">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h2 className="font-medium text-2xl poppinsfont mt-5 mb-5">What I do!</h2>
      <WhatIDoCard/>

    </div>
  );
};
