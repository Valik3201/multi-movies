import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

/**
 * MediaItem component to display information about a movie or TV show.
 * @param {Object} props - The props object.
 * @param {Object} props.movie - The movie object containing information to display.
 * @returns {JSX.Element} The JSX representation of the MediaItem component.
 */
const MediaItem = ({ movie }) => {
  return (
    <Link
      to={movie.first_air_date ? `/tv/${movie.id}` : `/movies/${movie.id}`}
      key={movie.id}
    >
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : `https://placehold.co/342x513?text=${
                    movie.title || movie.name
                  }`
            }
            alt={movie.title || movie.name}
            className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[2/3]"
          />
        </div>
        {movie.media_type && (
          <div className="flex-none">
            <Badge
              className={
                movie.media_type === "tv" ? "bg-lime-400 text-black" : ""
              }
            >
              {movie.media_type === "tv"
                ? "TV"
                : movie.media_type.charAt(0).toUpperCase() +
                  movie.media_type.slice(1)}
            </Badge>
          </div>
        )}

        <div className="flex flex-col gap-x-0.5">
          <h3 className="scroll-m-20 text-lg font-bold tracking-tight">
            {movie.title || movie.name}
          </h3>
          <h4 className="text-sm text-muted-foreground font-bold">
            {movie.release_date && new Date(movie.release_date).getFullYear()}
            {movie.first_air_date &&
              new Date(movie.first_air_date).getFullYear()}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default MediaItem;
