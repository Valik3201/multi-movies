import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { buttonVariants } from '@/components/ui/button';

import { HomeIcon, VideoIcon } from '@radix-ui/react-icons';
import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <div className="container md:mx-auto pb-8">
      <header className="py-8">
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? buttonVariants({ variant: 'default' })
                      : buttonVariants({ variant: 'outline' })
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
                      ? buttonVariants({ variant: 'default' })
                      : buttonVariants({ variant: 'outline' })
                  }
                >
                  <VideoIcon className="mr-2 h-4 w-4" />
                  Movies
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
