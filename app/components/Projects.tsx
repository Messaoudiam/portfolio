import React from "react";
import {
  SiTypescript,
  SiAngular,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPrisma,
  SiSwagger,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

// Icon mapping for each technology
const iconMap: Record<string, React.JSX.Element> = {
  TypeScript: <SiTypescript className="w-3 h-3 text-[#3178C6]" />,
  Angular: <SiAngular className="w-3 h-3 text-[#DD0031]" />,
  "Angular Material": <MdDevices className="w-3 h-3 text-[#DD0031]" />,
  React: <SiReact className="w-3 h-3 text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />,
  "Node.js": <SiNodedotjs className="w-3 h-3 text-[#339933]" />,
  NestJS: <SiNestjs className="w-3 h-3 text-[#E0234E]" />,
  Express: <SiExpress className="w-3 h-3 text-foreground/80" />,
  TypeORM: <SiTypescript className="w-3 h-3 text-[#FF6B35]" />,
  Prisma: <SiPrisma className="w-3 h-3 text-[#2D3748]" />,
  Swagger: <SiSwagger className="w-3 h-3 text-[#85EA2D]" />,
  MySQL: <SiMysql className="w-3 h-3 text-[#4479A1]" />,
  PostgreSQL: <SiPostgresql className="w-3 h-3 text-[#336791]" />,
  MongoDB: <SiMongodb className="w-3 h-3 text-[#47A248]" />,
  Docker: <SiDocker className="w-3 h-3 text-[#2496ED]" />,
  "GitHub Actions": <SiGithubactions className="w-3 h-3 text-[#2088FF]" />,
  Git: <SiGit className="w-3 h-3 text-[#F05032]" />,
  "CI/CD": <SiGithubactions className="w-3 h-3 text-[#2088FF]" />,
  JavaScript: <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />,
  JWT: <SiJsonwebtokens className="w-3 h-3 text-[#000000]" />,
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  githubBackend?: string;
}

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  const projects: Project[] = [
    {
      title: "Clic-ERP",
      description:
        "Digital management application for Public Access Establishments (ERP). Centralizes documents, intelligently manages equipment and periodic visits, dematerializes registers, and provides partner access. A comprehensive solution for regulatory compliance and operational efficiency.",
      tech: ["Angular", "NestJS", "TypeORM", "TypeScript", "MySQL", "Docker"],
      link: "https://www.clic-erp.fr/landing",
    },
    {
      title: "MediaTech",
      description:
        "A modern media management platform built with Angular 19 and NestJS. Features standalone components, Prisma ORM, JWT authentication, and comprehensive Docker containerization with CI/CD pipeline.",
      tech: ["Angular", "NestJS", "Prisma", "PostgreSQL", "Docker", "JWT"],
      github: "https://github.com/Messaoudiam/MediaTech",
    },
    {
      title: "Airnbb Platform",
      description:
        "Airbnb-inspired accommodation booking platform developed during Wild Code School training. Includes property listings, booking system, and user authentication.",
      tech: ["JavaScript", "React", "Express", "MongoDB"],
      github: "https://github.com/Messaoudiam/Airnbb",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-foreground/[0.02] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-foreground/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-foreground/[0.015] rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
            Selected Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              role="article"
              className={`group bg-background rounded-xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                index <= 1
                  ? "border-accent/30 shadow-lg shadow-accent/5 hover:border-accent/50 hover:shadow-accent/15"
                  : "border-foreground/10 hover:border-accent/30 hover:shadow-accent/10"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    {index <= 1 && (
                      <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full text-xs font-medium text-foreground/80"
                      >
                        <div className="flex-shrink-0">
                          {iconMap[tech] || (
                            <div className="w-3 h-3 rounded-full bg-accent/50"></div>
                          )}
                        </div>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2 flex-wrap">
                  {project.link && (
                    <a
                      href={project.link}
                      aria-label={`${project.title} website`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Website
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="ml-1"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label={`${project.title} repository`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent/80 hover:text-accent transition-colors"
                    >
                      {project.githubBackend ? "Frontend" : "GitHub"}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="ml-1"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      aria-label={`${project.title} backend repository`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent/60 hover:text-accent transition-colors"
                    >
                      Backend
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="ml-1"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
