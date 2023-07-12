import React from "react";
import introPic from "./figures/Lamia.png";
import cloud from "./figures/cloud.png";
import mountain from "./figures/mountain.png";

const Intro = () => {
  return (
    <div className="text-center text-gray-700 font-serif">
      <div id="home" className="bg-[#eaf6f6] dark:bg-[#191A19]">
        <div className="flex flex-row pl-36 pt-20 my-4">
          <img src={cloud} alt="cloud_image" />
        </div>
        <h1 className="text-teal-300 dark:text-teal-800 text-5xl font-sacramento mt-70 mx-auto">
          I'm Lamia
        </h1>
        <h2 className="font-normal text-teal-300 text-2xl font-montserrat">
          a web designer
        </h2>
        <div className="flex flex-row-reverse my-4 pr-36">
          <img src={cloud} alt="cloud_image" />
        </div>

        <img src={mountain} alt="mountain_image" className="m-auto" />
      </div>
      <div id="about" className="flex flex-col gap-y-2 my-4">
        <img className="m-auto w-[200px]" src={introPic} alt="Lamia's Photo" />

        <h2 className="font-normal text-teal-300 text-2xl font-montserrat">
          Hello.
        </h2>
        <p className="leading-2 w-30 mx-auto">
          I am a Web Developer. Currently working at{" "}
          <a
            href="https://grehus.com/"
            className="text-green-600 text-lg font-semibold"
          >
            Grehus
          </a>{" "}
          as an intern.
        </p>
      </div>
      <hr />
      <div id="skills" className="skills bg-[#eaf6f6] dark:bg-[#191A19]">
        <h2 className="font-normal text-teal-300 dark:text-teal-800 text-2xl font-montserrat">
          My Skills.
        </h2>
        <div className="mx-56">
          <div className="flex flex-row">
            <img
              className="skill-Img"
              src="https://media4.giphy.com/media/M4NykXxUE0HAcK7UJ6/200w.webp?cid=ecf05e477f8qoz3fgi3h7g7emaxbex32zj683ymq5eauybok&rid=200w.webp&ct=s"
              alt="Website Design using html css js"
            />
            <div>
              <h3 className="text-[#11999e] dark:text-[#40d9de] font-montserrat text-right">
                Website Design & Development
              </h3>
              <p className="leading-2 text-right dark:text-slate-300">
                I have a strong passion for creating visually appealing and
                user-friendly websites. With my expertise in both design and
                development, I am able to bring my clients' visions to life by
                creating custom websites that exceed their expectations.
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row">
            <div>
              <h3 className="text-[#11999e] dark:text-[#40d9de] font-montserrat text-left">
                Dance
              </h3>
              <p className="leading-2 text-left dark:text-slate-300">
                Dance is my ultimate form of self-expression, bringing me joy
                and fulfillment like nothing else.
              </p>
            </div>
            <div className="flex justify-end">
              <img
                className=""
                src="https://media3.giphy.com/media/63A2K1Lxt7Cbgo2BJW/200w.webp?cid=ecf05e4761362w7ml1osc0fk38succ3mmr8ive0aadzk0ddw&rid=200w.webp&ct=s"
                alt="Dance"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-dotted border-t-0 border-r-0 border-l-0 w-60 border-7 border-teal-100 pt-4 mx-auto" />
      <div id="contact" className="contact-me">
        <h2 className="font-normal text-teal-300 text-2xl font-montserrat">
          Get In Touch
        </h2>
        <h4 className="pb-4 dark:text-slate-300">
          Want a Responsive Modern Website?
          <br />
          Contact here if you are interested.
        </h4>
        <a
          className="bg-[#11999e] text-white px-4 py-2 rounded-md hover:bg-[#0c787b]"
          href="mailto:lamiahossain2017@gmail.com"
        >
          Contact Me
        </a>
      </div>

      <div
        id="footer"
        className="bg-[#66bfbf] dark:bg-[#3f6262] pt-4 flex flex-col gap-y-4 mt-4"
      >
        <div className="flex flex-row gap-x-4 justify-center">
          <a
            className="footer-link text-[#164c4e] dark:text-[#6afaff]"
            href="linkedin.com/in/lamia-hossain-7a86481ab"
          >
            LinkedIn
          </a>
          <a
            className="footer-link text-[#164c4e] dark:text-[#6afaff]"
            href="https://github.com/Lamia-Hossain"
          >
            GitHub
          </a>
        </div>
        <p className="leading-2" style={{ color: "#EAF6F6" }}>
          © Lamia Hossain.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Intro;
