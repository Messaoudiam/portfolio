"use client";

import React from "react";
import { useTranslations } from "next-intl";
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
  SiNextdotjs,
  SiRadixui,
  SiNuxtdotjs,
  SiVuedotjs,
  SiSupabase,
  SiDrizzle,
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
  "Next.js": <SiNextdotjs className="w-3 h-3 text-[#000000]" />,
  "shadcn/ui": <SiRadixui className="w-3 h-3 text-[#161618]" />,
  "Nuxt": <SiNuxtdotjs className="w-3 h-3 text-[#00DC82]" />,
  "Vue": <SiVuedotjs className="w-3 h-3 text-[#4FC08D]" />,
  "Supabase": <SiSupabase className="w-3 h-3 text-[#3ECF8E]" />,
  "Drizzle": <SiDrizzle className="w-3 h-3 text-[#C5F74F]" />,
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
  const t = useTranslations("Projects");

  const projects: Project[] = [
    {
      title: t("caminotv.title"),
      description: t("caminotv.description"),
      tech: [
        "TypeScript",
        "Next.js",
        "React",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      link: "https://camino-tv.vercel.app",
      github: "https://github.com/Messaoudiam/camino-tv",
    },
    {
      title: t("systemefluide.title"),
      description: t("systemefluide.description"),
      tech: [
        "TypeScript",
        "Nuxt",
        "Vue",
        "Supabase",
        "Drizzle",
        "Tailwind CSS",
        "CI/CD",
        "GitHub Actions",
      ],
      link: "https://systeme-fluide.vercel.app/",
      github: "https://github.com/Messaoudiam/systeme-fluide",
    },
    {
      title: t("mediatech.title"),
      description: t("mediatech.description"),
      tech: [
        "TypeScript",
        "Angular",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "CI/CD",
        "GitHub Actions",
      ],
      link: "https://my-library.cloud/landing",
      github: "https://github.com/Messaoudiam/MediaTech",
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
            {t("title")}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              role="article"
              className={`group bg-background rounded-xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full ${
                index <= 1
                  ? "border-accent/30 shadow-lg shadow-accent/5 hover:border-accent/50 hover:shadow-accent/15"
                  : "border-foreground/10 hover:border-accent/30 hover:shadow-accent/10"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Header Section - Fixed Height */}
                <div className="h-[200px] flex flex-col justify-start">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    {index <= 1 && (
                      <span className="px-2 py-1 bg-accent text-white text-xs font-medium rounded-full">
                        {t("current")}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Section - Fixed Position */}
                <div className="py-6">
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

                {/* Links Section - Fixed Height */}
                <div className="min-h-[60px] flex items-center gap-4 pt-2 flex-wrap">
                  {project.link && (
                    <a
                      href={project.link}
                      aria-label={`${project.title} website`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      {t("website")}
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
                      {project.githubBackend ? t("frontend") : t("github")}
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
                      {t("backend")}
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
