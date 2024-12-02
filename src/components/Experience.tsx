import mknowsLogo from "../assets/mknows-logo.svg";
import techvisionLogo from "../assets/techvision-logo.png";
import googleLogo from "../assets/google-logo.png";

export default function Experience() {
  const experiences = [
    {
      company: "M-Knows COnsulting",
      companyLogo: mknowsLogo,
      role: "iOS Developer",
      period: "Feb 2023 - Jul 2023",
      description: [
        "Developing KampusGratis App",
        "Creating various feature",
        "Deployment to AppStore",
      ],
    },
    {
      company: "TechVision Solution",
      companyLogo: techvisionLogo,
      role: "Frontend Developer",
      period: "Jun 2022 - Aug 2022",
      description: [
        "Collaborated with UI/UX team to design responsive web applications",
        "Implemented reusable components using React.js",
        "Optimized performance for faster load times",
      ],
    },
    {
      company: "Google",
      companyLogo: googleLogo,
      role: "Full Stack Developer",
      period: "Mar 2021 - May 2022",
      description: [
        "Designed and built end-to-end web applications",
        "Managed cloud infrastructure on AWS",
        "Ensured application security through rigorous testing",
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
              className="bg-gray-200 grid grid-cols-3 gap-10 p-8 rounded-xl mt-12 shadow-lg"
              key={index}
            >
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-auto"
                  src={exp.companyLogo}
                  alt={exp.company}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <ul className="text-sm md:text-base text-gray-700 mt-4 list-disc pl-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <span className="text-sm md:text-base text-gray-700 md:ml-auto md:self-start">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
