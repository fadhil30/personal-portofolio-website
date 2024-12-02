import myImage from "../assets/user.png";
import iconLocation from "../assets/Icon-location.svg";
import gitHubLogo from "../assets/github-logo.svg";
import linkedInLogo from "../assets/linkedin-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
export default function Hero() {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row py-16 px-8 md:py-24 md:px-20 m-0 justify-between items-center gap-8">
        <div className="flex flex-col text-pure-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm Fadhil 👋
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600 mt-2">
            An graduated student of Informatics Engineering at Bíawijaya
            Univeísity that is a knowledge- curious, teamwork, communicative,
            and quick learner person. I have interest in Front-End Web
            Developer, Full Stack Web Developer, Apple iOS Developer, and
            Android Developer.
          </p>
          <div className="flex flex-row gap-2 mt-6 md:mt-12">
            <img
              className="w-5 h-5 md:w-6 md:h-6"
              src={iconLocation}
              alt="Icon Location"
            />
            <p className="text-sm md:text-base font-normal text-gray-600">
              Jakarta, Indonesia
            </p>
          </div>
          <ul className="mt-2 list-disc pl-6 marker:text-emerald">
            <li className="text-base font-normal text-gray-600">
              Available for new projects
            </li>
          </ul>
          <div className="flex flex-row gap-3 mt-8 md:mt-12">
            <img
              className="w-5 h-5 md:w-6 md:h-6"
              src={gitHubLogo}
              alt="GitHub Logo"
            />
            <img
              className="w-5 h-5 md:w-6 md:h-6"
              src={linkedInLogo}
              alt="LinkedIn Logo"
            />
            <img
              className="w-5 h-5 md:w-6 md:h-6"
              src={twitterLogo}
              alt="X Logo"
            />
          </div>
        </div>
        <img
          className="w-52 md:w-80 object-contain shadow-xl shadow-slate-50"
          src={myImage}
          alt="User Photo"
        />
      </div>
    </section>
  );
}
