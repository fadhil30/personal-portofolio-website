import foodApp from "../assets/foodApp.png";
import sarangApp from "../assets/SarangApp.png";
import findHouseApp from "../assets/FindHouseApp.png";
import shareButton from "../assets/share-button.svg";

export default function MyProject() {
  const projects = [
    {
      projectTitle: "Food App",
      description:
        "In the digital era, various companies compete to develop user-friendly and responsive websites and applications. As a result, jobs related to design and development are in high demand today. I work as a UI Engineer, responsible for slicing the Food App design from Figma using Xcode, a development tool for iOS-based applications.",
      image: foodApp,
      techStack: ["SwiftUI", "Figma"],
      link: "#",
    },
    {
      projectTitle: "Dating App",
      description:
        "Learning how to build projects using cutting-edge technology, particularly Flutter SDK, to create an impressive and marketable portfolio that serves as a strong foundation for job hunting. In this project, I explored key concepts such as Auto Login with Local Storage, State Management using Bloc version 8, writing Clean Code by implementing a feature-first folder structure, and leveraging Flutter version 3 with null safety support.",
      image: sarangApp,
      techStack: ["Dart", "Flutter", "Figma"],
      link: "#",
    },
    {
      projectTitle: "Tinder App",
      description:
        "Starting from the basics, I learned how to build an application designed to help people find rental accommodations (kos-kosan) worldwide. The app integrates with APIs to store crucial data, such as property details and more. Additionally, I gained hands-on experience in transforming designs from Figma into functional code using Flutter SDK, Visual Studio Code, and Dart.",
      image: findHouseApp,
      techStack: ["Dart", "Flutter", "Figma"],
      link: "#",
    },
  ];

  return (
    <section className="py-[96px] px-[20px] md:px-[80px] m-0">
      <div className="max-w-full mx-auto flex flex-col items-center">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          Projects
        </h2>
        <p className="mt-6 text-base font-normal text-gray-600 text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-xl">
        {projects.map((project, index) => (
          <div
            className="bg-gray-100 rounded-xl overflow-hidden flex flex-col lg:flex-row gap-6 mt-12 p-6 md:p-12"
            key={index}
          >
            <div className="relative w-full lg:w-1/2">
              <img
                className="object-cover w-full h-64 md:h-96 rounded-xl"
                src={project.image}
                alt={project.projectTitle}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4 flex flex-col">
              <h3 className="text-gray-900 text-xl font-semibold">
                {project.projectTitle}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    className="bg-gray-200 text-gray-600 text-xs py-1 px-3 rounded-xl"
                    key={idx}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link}>
                <img className="w-9" src={shareButton} alt="Share Button" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
