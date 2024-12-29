import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a team of passionate developers creating innovative web solutions. Follow us on social media to stay updated.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <span className="block text-sm">Email: support@example.com</span>
              </li>
              <li>
                <span className="block text-sm">Phone: +123 456 7890</span>
              </li>
              <li>
                <span className="block text-sm">Address: 123 Street, City</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-4.5c0-1.103-.897-2-2-2s-2 .897-2 2v4.5h-3v-10h3v1.357c.835-.834 1.75-1.357 3-1.357 2.209 0 4 1.791 4 4v6z" />
</svg>

              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16H14v-5h2.343M6 6v11h11m-7-8h8M3 3h18v18H3V3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 11c0-1.105.894-2 2-2s2 .895 2 2-1.894 2-2 2-2-.895-2-2zM4 4h16v16H4V4zm4 2a4 4 0 000 8h8a4 4 0 000-8H8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Quasim Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
