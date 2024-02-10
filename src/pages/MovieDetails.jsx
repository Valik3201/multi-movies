import { NavLink, Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

import { format } from "date-fns";

import { fetchMovieDetails } from "@/services/fetchMovieDetails";

import { Badge } from "@/components/ui/badge";

import { Loader } from "@/components/Loader";
import { AlertDestructive } from "@/components/Alert";

const MovieDetails = () => {
  const { movieId } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["movieDetails", movieId],
    queryFn: () => fetchMovieDetails(movieId),
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-6xl">
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : `https://placehold.co/342x513?text=${data.title}`
          }
          alt={data.title}
          className="w-full rounded-lg"
        />
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {data.title}
            </h1>

            {data.original_language !== "en" && (
              <h2 className="scroll-m-20 pt-2 text-3xl text-muted-foreground font-semibold tracking-tight first:mt-0">
                {data.original_title}
              </h2>
            )}
          </div>

          <p className="text-md font-semibold">
            Realese date:{" "}
            <span className="text-muted-foreground">
              {format(new Date(data.release_date), "MMMM d, yyyy")}
            </span>
          </p>

          {data.tagline && (
            <blockquote className="border-l-2 pl-6 italic">
              {data.tagline}
            </blockquote>
          )}

          <p className="leading-7">{data.overview}</p>

          <div className="flex flex-row flex-wrap gap-2">
            <p className="scroll-m-20 text-md font-semibold tracking-tight">
              Genres:
            </p>
            {data.genres.map((genre) => (
              <ul key={genre.id}>
                <li>
                  <Badge>{genre.name}</Badge>
                </li>
              </ul>
            ))}
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            <p className="scroll-m-20 text-md font-semibold tracking-tight">
              Production Countries:
            </p>
            {data.production_countries.map((country) => (
              <ul key={country.iso_3166_1}>
                <li>
                  <Badge>{country.name}</Badge>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <ul className="flex flex-row gap-4 border-b pt-4 pb-2">
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              isActive
                ? "scroll-m-20 text-2xl font-semibold tracking-tight"
                : "scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground transition hover:text-inherit"
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive
                ? "scroll-m-20 text-2xl font-semibold tracking-tight"
                : "scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground transition hover:text-inherit"
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
