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
  SiNextdotjs,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

interface AboutProps {}

export default function About({}: AboutProps) {
  // Icon mapping for each technology
  const iconMap: { [key: string]: React.JSX.Element } = {
    TypeScript: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
    Angular: <SiAngular className="w-4 h-4 text-[#DD0031]" />,
    "Angular Material": <MdDevices className="w-4 h-4 text-[#DD0031]" />,
    React: <SiReact className="w-4 h-4 text-[#61DAFB]" />,
    "Tailwind CSS": <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
    "Node.js": <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
    NestJS: <SiNestjs className="w-4 h-4 text-[#E0234E]" />,
    Express: <SiExpress className="w-4 h-4 text-foreground/80" />,
    TypeORM: <SiTypescript className="w-4 h-4 text-[#FF6B35]" />,
    Prisma: <SiPrisma className="w-4 h-4 text-[#2D3748]" />,
    Swagger: <SiSwagger className="w-4 h-4 text-[#85EA2D]" />,
    MySQL: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
    PostgreSQL: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
    MongoDB: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
    Docker: <SiDocker className="w-4 h-4 text-[#2496ED]" />,
    "GitHub Actions": <SiGithubactions className="w-4 h-4 text-[#2088FF]" />,
    Git: <SiGit className="w-4 h-4 text-[#F05032]" />,
    "CI/CD": <SiGithubactions className="w-4 h-4 text-[#2088FF]" />,
    "Next.js": <SiNextdotjs className="w-4 h-4 text-[#000000]" />,
  };

  const skillCategories = {
    Frontend: [
      "TypeScript",
      "Angular",
      "Angular Material",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "NestJS", "Express", "TypeORM", "Prisma", "Swagger"],
    Database: ["MySQL", "PostgreSQL", "MongoDB"],
    DevOps: ["Docker", "GitHub Actions", "Git", "CI/CD"],
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Subtle background element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
                About Me
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-accent to-accent/50"></div>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm Messaoud ZOUGGAB, a passionate fullstack developer with
                expertise in modern web technologies. Currently working at
                Clic-ERP since February 2025, I specialize in React, Angular,
                NestJS, and building scalable web applications.
              </p>
              <p>
                My journey includes mastering both frontend and backend
                technologies, with a current focus on expanding my skills in
                DevOps practices. I'm particularly interested in microservices
                architecture, containerization with Docker.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-foreground mb-6">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-3 px-3 py-2 bg-foreground/5 rounded-lg text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/10"
                        >
                          <div className="flex-shrink-0">
                            {iconMap[skill] || (
                              <div className="w-4 h-4 rounded-full bg-accent/50"></div>
                            )}
                          </div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-accent/30 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-medium text-foreground">
                      Fullstack Developer
                    </h4>
                    <span className="text-sm text-accent font-mono font-medium">
                      Feb 2025 - Present
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    <span className="font-medium text-accent">Clic-ERP</span> -
                    Building innovative ERP solutions using modern web
                    technologies and contributing to scalable application
                    development.
                  </p>
                </div>

                <div className="border-l-2 border-accent/20 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-medium text-foreground">
                      Learning & Development
                    </h4>
                    <span className="text-sm text-accent/80 font-mono font-medium">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Continuously expanding skills in DevOps practices and
                    microservices architecture while exploring modern deployment
                    and containerization strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
