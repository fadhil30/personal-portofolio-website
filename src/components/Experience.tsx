import mknowsLogo from "../assets/mknows-logo.svg";
import escoLogo from "../assets/esco-logo.svg";

export default function Experience() {
  const experiences = [
    {
      company: "ESCO Lifescience",
      companyLogo: escoLogo,
      role: "Jr. Web Developer",
      period: "Jun 2025 - Present",
      description: [
        "Web Development (Laravel, Vue.js): Leading the maintenance and feature enhancement of the main corporate website. Engineered a custom hybrid translation system integrated with the DeepL API, replacing standard Google Translate to provide high-accuracy localization for technical scientific content.",
        'Mobile Development (Flutter): Spearheaded the development of "Filtracheck," a specialized cross-platform mobile application. Implemented complex chemical calculation algorithms to provide automated, tailored product recommendations based on strict user safety requirements.',
        "System Optimization: Improved website performance and SEO by optimizing asset delivery and refining database queries in a Laravel-based environment.",
      ],
    },
    {
      company: "ESCO Lifescience",
      companyLogo: escoLogo,
      role: "Software Engineer Intern",
      period: "Feb 2025 – May 2025",
      description: [
        "Assisted the engineering team in developing internal web tools using React and Node.js.",
        "Contributed to the migration of legacy components to modern frameworks, ensuring better code maintainability and user interface consistency.",
        "Participated in daily stand-ups and sprint planning, gaining hands-on experience in Agile development methodologies.",
      ],
    },
    {
      company: "M-KNOWS CONSULTING",
      companyLogo: mknowsLogo,
      role: "iOS Developer Intern",
      period: "Feb 2023 – Jun 2023",
      description: [
        'LMS Development: Contributed to the full-stack development of "Kampus Gratis," a large-scale Learning Management System platform aimed at providing accessible education across Indonesia.',
        "Feature Engineering: Engineered core functionalities for both user and administrative interfaces, ensuring seamless navigation and efficient content delivery for thousands of active learners.",
        "Collaborative Development: Worked closely with cross-functional teams in an Agile environment to identify and resolve technical bottlenecks, significantly improving platform stability and user engagement.",
      ],
    },
  ];

  return (
    <section id="work" className="bg-gray-50 py-12 px-6 md:py-24 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="bg-gray-200 rounded-xl p-1 w-28 text-center text-sm font-medium text-gray-600">
          Experience
        </h2>
        <p className="mt-6 text-sm md:text-base font-normal text-gray-600 text-center">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="w-full max-w-4xl mt-8 space-y-8">
          {experiences.map((exp, index) => (
            <div
              className="bg-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-xl shadow-lg"
              key={index}
            >
              {/* Logo */}
              <div className="flex flex-col items-center md:items-start">
                <img
                  className="h-12 w-auto"
                  src={exp.companyLogo}
                  alt={exp.company}
                />
                <span className="text-sm md:text-base text-gray-700 mt-4">
                  {exp.period}
                </span>
              </div>

              {/* Role and Description */}
              <div className="col-span-2 flex flex-col items-center md:items-start space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <ul className="text-sm md:text-base text-gray-700 list-disc pl-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
