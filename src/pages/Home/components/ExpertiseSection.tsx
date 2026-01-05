import { useState } from "react";
import { LogoLoop, type LogoItem } from "../../../components/ui/LogoLoop";
import html from "../../../assets/html.png";
import scss from "../../../assets/scss.png";
import react from "../../../assets/reactjs.svg";
import nextjs from "../../../assets/next.png";
import tailwind from "../../../assets/tailwind.svg";
import typescript from "../../../assets/ts.png";
import threejs from "../../../assets/3js.png";
import fastapi from "../../../assets/fastapi.png";
import dynamo from "../../../assets/dynamo.png";
import mongodb from "../../../assets/mongodb.png";
import mysql from "../../../assets/sql.png";
import postgresql from "../../../assets/Postgresql_elephant.svg";
import nestjs from "../../../assets/NestJS.svg";
import graphql from "../../../assets/GraphQL.png";
import reactnative from "../../../assets/React-native.png";
import ios from "../../../assets/ios.png";
import langchain from "../../../assets/langchain.png";
import openai from "../../../assets/openai.webp";
import langsmith from "../../../assets/langsmith.png";
import ollama from "../../../assets/ollama.png";
import adk from "../../../assets/adk.png";
import gemini from "../../../assets/gemini.webp";

type Technology = {
  name: string;
  icon: string;
};

type Category = {
  name: string;
  technologies: Technology[];
};

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState<string>("Web");

  const categories: Category[] = [
    {
      name: "Web",
      technologies: [
        { name: "HTML", icon: html },
        { name: "Three.js", icon: threejs },
        { name: "Scss", icon: scss },
        { name: "React", icon: react },
        { name: "Next.js", icon: nextjs },
        { name: "Tailwind", icon: tailwind },
        { name: "Typescript", icon: typescript },
        { name: "NestJS", icon: nestjs },
        { name: "FastAPI", icon: fastapi },
      ],
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", icon: reactnative },
        { name: "iOS", icon: ios },
        { name: "Android", icon: "AN" },
      ],
    },
    {
      name: "Database",
      technologies: [
        { name: "MongoDB", icon: mongodb },
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgresql },
        { name: "DynamoDB", icon: dynamo },
        { name: "GraphQL", icon: graphql },
      ],
    },
    {
      name: "Gen-AI",
      technologies: [
        { name: "LangChain", icon: langchain },
        { name: "OpenAI", icon: openai },
        { name: "LangSmith", icon: langsmith },
        { name: "Ollama", icon: ollama },
        { name: "ADK", icon: adk },
        { name: "Gemini", icon: gemini },
      ],
    },
  ];

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">
          {/* Left Side - Title */}
          <div className="flex items-start">
            <div className="w-1 h-20 lg:h-32 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-6" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
              Our Expertise
            </h2>
          </div>

          {/* Right Side - Tabs and Technologies */}
          <div className="flex-1">
            {/* Tab Headers */}
            <div className="flex gap-8 mb-8 border-b border-slate-800">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveTab(category.name)}
                  className={`pb-4 px-2 text-lg font-medium transition-all duration-300 relative ${
                    activeTab === category.name
                      ? "text-purple-400"
                      : "text-slate-400 hover:text-slate-300"
                  }`}
                >
                  {category.name}
                  {activeTab === category.name && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Technology Grid */}
            {activeCategory && (
              <div className="flex flex-wrap gap-3">
                {activeCategory.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="w-40 h-40 rounded-lg bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center p-2 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform overflow-hidden ${
                        !tech.icon.includes("/") && !tech.icon.includes(".")
                          ? "bg-slate-700"
                          : "bg-transparent"
                      }`}
                    >
                      {typeof tech.icon === "string" &&
                      (tech.icon.includes("/") ||
                        tech.icon.includes(".") ||
                        tech.icon.startsWith("data:")) ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain p-0.5"
                        />
                      ) : (
                        <span className="text-white font-bold text-xs">
                          {tech.icon}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 text-center group-hover:text-slate-300 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logo Loop Section */}
        <div className="mt-16">
          <LogoLoop
            logos={categories.flatMap((category) =>
              category.technologies
                .filter(
                  (tech) =>
                    typeof tech.icon === "string" &&
                    (tech.icon.includes("/") || tech.icon.includes("."))
                )
                .map(
                  (tech): LogoItem => ({
                    src: tech.icon as string,
                    alt: tech.name,
                    title: tech.name,
                  })
                )
            )}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#0f172a"
            scaleOnHover={true}
            ariaLabel="Technologies we work with"
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
}
