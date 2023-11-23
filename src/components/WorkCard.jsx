import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import tandemImg from "/images/tandem.png";
import legitImg from "/images/legit-kitchen.png";
import letsbuild from "/images/letsbuild.png";
import sjportfolio from "/images/sj-portfolio.png";
import yumeats from "/images/yumeats.png";
import todo from "/images/todo.png";

export const WorkCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5  mt-5 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={tandemImg}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">Tandem</h2>
              <small className="text-grayTextColor  text-sm">
                Built with React, Tailwind, HTML
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/tandem-logistics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://tandemlogistics.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={letsbuild}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">LetsBuild</h2>
              <small className="text-grayTextColor  text-sm">
                Built with HTML, CSS, JavaScript
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/Letsbuild"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://letsbuil.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={yumeats}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">Yumeats</h2>
              <small className="text-grayTextColor  text-sm">
                Built with React, Tailwind, HTML
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/yumeats"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://yumeats-yt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={legitImg}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">Legit-Kitchen</h2>
              <small className="text-grayTextColor  text-sm">
                Built with HTML, CSS JavaScript
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/legit-kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://legit-kitchen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={sjportfolio}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">SJ-Portfolio</h2>
              <small className="text-grayTextColor  text-sm">
                Built with React, Tailwind, HTML
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/SJ-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://sj-portfolio-yt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-cardBg rounded-xl hover:scale-105 duration-500 ease">
          <div className="w-50">
            <img
              src={todo}
              alt="tandem-img"
              sizes={50}
              className="rounded-xl w-full "
            />
          </div>
          <div className="px-2 py-5 flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl poppinsfont">Todo App</h2>
              <small className="text-grayTextColor  text-sm">
                Built with HTML, CSS, JavaScript
              </small>
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/Lesuuh/todo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />{" "}
              </a>
              <a
                href="https://lesuuh.github.io/todo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaExternalLinkAlt className="text-red text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
