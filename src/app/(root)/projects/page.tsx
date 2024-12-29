import React from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "https://quasimkhan.github.io/img/QK_logo-removebg.png",
    link: "https://quasimkhan.vercel.app",
  },
  {
    id: 2,
    title: "Educational Committee of Naseerpur",
    description:
      "An educational website ECN to provide about previous year question papers and many more about education and ECN.",
    image: "https://ecnaseerpur.in/assets/logo-ClJHHz2Q.png",
    link: "https://ecnaseerpur.in",
  },
  {
    id: 3,
    title: "An AI image Generator - QKGenAI",
    description: "A website that generates images using AI just by typing a word.",
    image: "https://via.placeholder.com/400x200",
    link: "https://qkgenai.vercel.app",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
