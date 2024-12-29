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
                <Link href="https://linkedin.com/in/quasimkhan" target="_blank">
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
                <span className="block text-sm">Email: quasimkhanpersonal@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/quasimkhan"
                target="_blank"
                className="hover:text-blue-400 transition"
                aria-label="linkedin"
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
