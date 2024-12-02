import jsLogo from "../assets/javascript-logo.svg";
import tsLogo from "../assets/typescript-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import reactLogo from "../assets/reactjs-logo.svg";
import tailwindcssLogo from "../assets/tailwindcss-logo.svg";
import nextjsLogo from "../assets/nextjs-logo.svg";
import nodejsLogo from "../assets/nodejs-logo.svg";
import dartLogo from "../assets/dart-logo.svg";
import flutterLogo from "../assets/flutter-logo.svg";
import swiftLogo from "../assets/swift-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import mysqlLogo from "../assets/mysql-logo.svg";
import figmaLogo from "../assets/figma-logo.svg";

export default function Skill() {
  const skills = [
    { name: "Javascript", logo: jsLogo },
    { name: "Typescript", logo: tsLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwindcss", logo: tailwindcssLogo },
    { name: "Nextjs", logo: nextjsLogo },
    { name: "Nodejs", logo: nodejsLogo },
    { name: "Dart", logo: dartLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "Swift", logo: swiftLogo },
    { name: "Git", logo: gitLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Figma", logo: figmaLogo },
  ];
  return (
    <section className="py-24 px-20 m-0">
      <div className="max-w-full mx-auto flex flex-col items-center">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          Skills
        </h2>
        <p className="mt-4 text-gray-600 text-base">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-12 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={skill.logo} alt={skill.name} className="h-12 mb-4" />
              <p className="text-sm font-medium text-gray-600">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
