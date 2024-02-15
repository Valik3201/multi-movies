import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { Loader } from "./Loader";
import Footer from "./Footer";

import ModeToggle from "./ModeToggle";

/**
 * SharedLayout component represents the layout shared across multiple pages.
 * It includes a navigation bar, mode toggle, and footer.
 * @returns {JSX.Element} - JSX element representing the SharedLayout component.
 */
export const SharedLayout = () => {
  return (
    <div className="container md:mx-auto max-w-5xl">
      <header className="pb-8">
        <nav className="flex justify-between border-b py-4">
          <ul className="flex flex-wrap gap-8 items-center text-md font-medium sm:mt-0">
            <li>
              <Button variant="link" className="p-0 hover:no-underline">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      : "text-muted-foreground transition hover:text-inherit"
                  }
                >
                  Home
                </NavLink>
              </Button>
            </li>
            <li>
              <Button variant="link" className="p-0 hover:no-underline">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? ""
                      : "text-muted-foreground transition hover:text-inherit"
                  }
                >
                  Movies
                </NavLink>
              </Button>
            </li>
          </ul>

          <ModeToggle />
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};
