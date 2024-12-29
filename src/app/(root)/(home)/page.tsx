export default function Home() {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Quasim Khan
            </h1>
            <p className="text-lg mb-8">
              Discover my projects, skills, and passion for crafting exceptional web experiences.
            </p>
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition"
            >
              Learn More About Me
            </a>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What I Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3M17 16l4-4m0 0l-4-4m4 4H9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600">
                  I create scalable and efficient web solutions tailored to your needs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 9.75a5.25 5.25 0 117.5 0M3 19.5l2.25-6.75m2.25 6.75L3 12.75m18 6.75l-2.25-6.75m-2.25 6.75L21 12.75M12 12a3.75 3.75 0 103.75-3.75M12 15v5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-600">
                  Specializing in building robust server-side applications.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                  <svg
                    className="h-12 w-12 text-blue-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01m-6.938 4h13.856C20.283 20 21 19.328 21 18.5v-13c0-.828-.717-1.5-1.625-1.5H5.625C4.717 4 4 4.672 4 5.5v13c0 .828.717 1.5 1.625 1.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Problem Solving
                </h3>
                <p className="text-gray-600">
                  Tackling complex challenges with innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Let’s Build Something Together
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to work on exciting projects? Feel free to reach out and collaborate!
            </p>
            <a
              href="https://linkedin.com/in/quasimkhan"
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    );
  }
  