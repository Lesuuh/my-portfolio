import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// import tandemImg from "/images/tandem.png";
// import legitImg from "/images/legit-kitchen.png";
// import letsbuild from "/images/letsbuild.png";
// import sjportfolio from "/images/sj-portfolio.png";
// import yumeats from "/images/yumeats.png";
// import todo from "/images/todo.png";

export const WorkCard = () => {
  const workData = [
    {
      id: 1,
      img: "/images/tandem.png",
      title: "Tandem",
      desc: "Built with React, Tailwind, HTML",
      github: "https://github.com/Lesuuh/tandem-logistics",
      link: "https://tandemlogistics.netlify.app/",
    },
    {
      id: 2,
      img: "/images/legit-kitchen.png",
      title: "Legit-Kitchen",
      desc: "Built with HTML, CSS, JavaScript",
      github: "https://github.com/Lesuuh/legit-kitchen",
      link: "https://legit-kitchen.netlify.app/",
    },
    {
      id: 3,
      img: "/images/sj-portfolio.png",
      title: "Sj-Portfolio",
      desc: "Built with React, Tailwind, HTML",
      github: "https://github.com/Lesuuh/SJ-portfolio",
      link: "https://sj-portfolio-yt.netlify.app/",
    },
    {
      id: 4,
      img: "/images/todo.png",
      title: "Todo App",
      desc: "Built with HTML, CSS, JavaScript",
      github: "https://github.com/Lesuuh/todo",
      link: "https://lesuuh.github.io/todo/",
    },
    {
      id: 5,
      img: "/images/yumeats.png",
      title: "Yumeats",
      desc: "Built with React, Tailwind, HTML",
      github: "https://github.com/Lesuuh/yumeats",
      link: "https://yumeats-yt.netlify.app/",
    },
    {
      id: 5,
      img: "/images/letsbuild.png",
      title: "LetsBuild",
      desc: "Built with HTML, CSS, JavaScript",
      github: "https://github.com/Lesuuh/Letsbuild",
      link: "https://letsbuil.netlify.app/",
    },
    {
      id: 6,
      img: "/images/homigon.png",
      title: "Homigon",
      desc: "Built with HTML, CSS, JavaScript",
      github: "https://github.com/Lesuuh/test-homigon",
      link: "https://homigon.harvoxx.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5  mt-5 lg:grid-cols-2">
      {workData.map((project) => {
        return (
          <div
            key={project.id}
            className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease"
          >
            <div className="w-50">
              <img
                src={project.img}
                alt="tandem-img"
                sizes={50}
                className="rounded-xl w-full "
              />
            </div>
            <div className="px-2 py-5 flex flex-row items-center justify-between">
              <div>
                <h2 className="text-xl poppinsfont">{project.title}</h2>
                <small className="text-grayTextColor  text-sm">
                  {project.desc}
                </small>
              </div>
              <div className="flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl" />{" "}
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt className="text-red text-xl" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
