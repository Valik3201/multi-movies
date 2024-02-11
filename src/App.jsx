import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SharedLayout } from "./components/SharedLayout";
import { ThemeProvider } from "@/components/theme-provider";

// Geist Sans Font
import "non.geist";
// Geist Mono Font
import "non.geist/mono";

// Create a client
const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews"));

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route
              path="movies/:movieId"
              element={<MovieDetails mediaType="movie" />}
            />
            <Route
              path="tv/:seriesId"
              element={<MovieDetails mediaType="tv" />}
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
