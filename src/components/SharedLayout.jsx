import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { buttonVariants } from "@/components/ui/button";

import { HomeIcon, VideoIcon } from "@radix-ui/react-icons";
import { Loader } from "./Loader";
import Footer from "./Footer";

import ModeToggle from "./mode-toggle";

export const SharedLayout = () => {
  return (
    <div className="container md:mx-auto max-w-5xl">
      <header className="py-8">
        <nav className="flex justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? buttonVariants({ variant: "default" })
                      : buttonVariants({ variant: "outline" })
                  }
                >
                  <HomeIcon className="mr-2 h-4 w-4" />
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? buttonVariants({ variant: "default" })
                      : buttonVariants({ variant: "outline" })
                  }
                >
                  <VideoIcon className="mr-2 h-4 w-4" />
                  Movies
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
