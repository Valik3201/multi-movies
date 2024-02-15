import { Button } from "@/components/ui/button";

/**
 * Footer component containing links and copyright information.
 * @returns {JSX.Element} The JSX representation of the Footer component.
 */
const Footer = () => {
  return (
    <footer className="border-t mt-8">
      <div className="w-full mx-auto max-w-screen-xl py-8 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024{" "}
          <Button variant="link" className="p-0 m-0">
            <a
              href="https://github.com/Valik3201/multi-movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Multi Movies
            </a>
          </Button>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <Button variant="link" className="p-0">
              <a href="/">Home</a>
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <a href="/movies">Movies</a>
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <a
                href="https://github.com/Valik3201/multi-movies"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <a
                href="https://github.com/Valik3201"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </Button>
          </li>
          <li>
            <Button variant="link" className="p-0">
              <a
                href="https://developer.themoviedb.org/reference/intro/getting-started"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
