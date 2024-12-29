export default function About() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <header className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg">
              I’m a passionate developer dedicated to crafting amazing web experiences.
            </p>
          </div>
        </header>
  
        {/* Content Section */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Bio Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who I Am</h2>
                <p className="text-gray-600 leading-relaxed">
                  Hello! I’m a web developer with a knack for building scalable, efficient, and visually appealing websites. I specialize in backend development but enjoy working across the full stack. 
                  Outside of coding, I love exploring new technologies, solving problems, and contributing to open-source projects.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
                <img
                  src="https://via.placeholder.com/400"
                  alt="About Image"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
  
          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
              My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">JavaScript</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">React.js</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">Next.js</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">Node.js</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">Tailwind CSS</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">MongoDB</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">APIs</h3>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800">Problem Solving</h3>
              </div>
            </div>
          </section>
  
          {/* Call-to-Action Section */}
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Want to Work Together?
            </h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out and collaborate on exciting projects!
            </p>
            <a
                href="https://linkedin.com/in/quasimkhan"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </section>
        </main>
      </div>
    );
  }
  