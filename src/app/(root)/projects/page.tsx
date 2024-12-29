export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my skills and projects.",
        image: "https://via.placeholder.com/400x200",
        link: "https://example.com/portfolio",
      },
      {
        id: 2,
        title: "E-commerce Store",
        description:
          "A fully functional e-commerce store with user authentication and payment integration.",
        image: "https://via.placeholder.com/400x200",
        link: "https://example.com/ecommerce",
      },
      {
        id: 3,
        title: "Blog Platform",
        description: "A blog platform with content management and user comments.",
        image: "https://via.placeholder.com/400x200",
        link: "https://example.com/blog",
      },
      {
        id: 4,
        title: "Weather App",
        description: "A weather forecasting app using public APIs.",
        image: "https://via.placeholder.com/400x200",
        link: "https://example.com/weather",
      },
    ];
  
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
  }
  