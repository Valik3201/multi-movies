import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { Loader } from "./Loader";
import Footer from "./Footer";

import ModeToggle from "./ModeToggle";

export const SharedLayout = () => {
  return (
    <div className="container md:mx-auto max-w-5xl">
      <header className="pb-8">
        <nav className="flex justify-between border-b py-4">
          <ul className="flex flex-wrap items-center mt-3 text-md font-medium sm:mt-0">
            <li>
              <Button variant="link" className="pl-0 hover:no-underline">
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
              <Button variant="link" className="hover:no-underline">
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
