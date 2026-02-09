import foodApp from "../assets/foodApp.png";
import sarangApp from "../assets/SarangApp.png";
import findHouseApp from "../assets/FindHouseApp.png";
import shareButton from "../assets/share-button.svg";
import escoLogo from "../assets/esco-logo.svg";
import mknowsLogo from "../assets/mknows-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import userProfile from "../assets/user.png";

export default function MyProject() {
  const projects = [
    {
      projectTitle: "Revamp RAG Chatbot for escolifesciences.com",
      description:
        "Spearheaded the front-end revitalization of the company’s Retrieval-Augmented Generation (RAG) chatbot, delivering a modern, interactive, and user-centric UI to enhance stakeholder engagement. Containerized the application using Docker for consistent deployment environments and optimized data workflows with Prisma ORM and PostgreSQL.",
      image: escoLogo,
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      projectTitle: "Assessment Escolab – Learning Management System",
      description:
        "Engineered a full-stack Learning Management System (LMS) designed for corporate training, implementing a responsive user interface and a robust administrative dashboard. Developed the application adhering to Clean Architecture principles and React best practices.",
      image: escoLogo,
      techStack: ["Next.js", "MongoDB", "Clean Architecture"],
      link: "#",
    },
    {
      projectTitle: "Filtracheck App",
      description:
        "Developed a high-performance cross-platform mobile utility for laboratory professionals to automate complex chemical safety calculations. Engineered custom algorithms to generate precise product recommendations based on safety requirements.",
      image: escoLogo,
      techStack: ["Flutter", "Dart"],
      link: "#",
    },
    {
      projectTitle: "Translations Feature for Corporate Website",
      description:
        "Architected a custom hybrid localization system to manage multi-language content across the corporate web ecosystem. Integrated DeepL API for automated high-quality translations and built a CMS interface for manual overrides.",
      image: escoLogo,
      techStack: ["Laravel", "Vue.js", "DeepL API", "MySQL"],
      link: "#",
    },
    {
      projectTitle: "Internal Corporate Chatbot",
      description:
        "Built a full-stack AI-driven analytics chatbot featuring Role-Based Access Control (RBAC) for executive and sales teams. Enabled natural language querying of real-time financial data, streamlining the generation of automated revenue reports.",
      image: escoLogo,
      techStack: ["Next.js", "Express", "OpenAI API"],
      link: "#",
    },
    {
      projectTitle: "Approval Web App",
      description:
        "Designed and implemented an internal validation system to replace manual database inspections with a centralized monitoring dashboard. Enhanced data integrity and operational efficiency by allowing stakeholders to review and approve critical records.",
      image: escoLogo,
      techStack: ["Next.js", "Express", "Node.js"],
      link: "#",
    },
    {
      projectTitle: "Freshbasket - Online Groceries Website",
      description:
        "Developed a scalable e-commerce platform tailored for the Indonesian grocery market, focusing on high availability and user convenience. Implemented location-based product listings and optimized search filters.",
      image: githubLogo,
      techStack: ["Next.js", "TailwindCSS"],
      link: "#",
    },
    {
      projectTitle: "Event Management Platform",
      description:
        "Created a comprehensive ticketing and event discovery platform, enabling promoters to manage events and users to purchase tickets seamlessly. Integrated secure authentication and dynamic promoter dashboards.",
      image: githubLogo,
      techStack: ["Next.js", "Node.js"],
      link: "#",
    },
    {
      projectTitle: "Company Profile Website",
      description:
        "Developed a modern, professional web presence for a corporate entity, focusing on brand identity and seamless information architecture. Implemented a fully responsive design and optimized asset delivery.",
      image: githubLogo,
      techStack: ["React", "TailwindCSS"],
      link: "#",
    },
    {
      projectTitle: "Auto Insight – Blog",
      description:
        "Engineered a dynamic automotive industry blog utilizing a Headless CMS (Contentful) for streamlined content delivery and management. Optimized for performance and SEO, ensuring fast loading times.",
      image: githubLogo,
      techStack: ["Next.js", "Contentful CMS", "Vercel"],
      link: "#",
    },
    {
      projectTitle: "Personal Portfolio Website",
      description:
        "Engineered a high-performance personal brand showcase featuring responsive design and fluid interactive animations to demonstrate technical proficiency and project history. Optimized for SEO and fast loading times.",
      image: userProfile,
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "#",
    },
    {
      projectTitle: "Find House App",
      description:
        "Built a dynamic real estate discovery application that simplifies the property searching process with integrated map views and advanced filtering. optimized app performance to handle high-resolution image rendering.",
      image: findHouseApp,
      techStack: ["Flutter", "Dart"],
      link: "#",
    },
    {
      projectTitle: "KampusGratis – Learning Management System",
      description:
        "Developed a comprehensive cross-platform LMS mobile application aimed at democratizing education across Indonesia. Engineered a seamless user interface for content delivery, ensuring a stable and intuitive learning experience.",
      image: mknowsLogo,
      techStack: ["Flutter", "Dart"],
      link: "#",
    },
    {
      projectTitle: "Sarang Dating App",
      description:
        "Architected a high-performance dating application featuring advanced matching algorithms and a secure, real-time end-to-end chatting system. Focused on delivering a streamlined user journey and robust data privacy.",
      image: sarangApp,
      techStack: ["Flutter", "Dart"],
      link: "#",
    },
    {
      projectTitle: "FavFood’s – iOS Food Ordering Application",
      description:
        "Developed a native iOS application designed for high-speed food and beverage ordering from local vendors. Implemented a user-friendly interface with extensive menu customization features and a simplified checkout flow.",
      image: foodApp,
      techStack: ["SwiftUI", "Swift"],
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
