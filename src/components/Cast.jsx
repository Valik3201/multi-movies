import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchCast } from "@/services/fetchCast";

import { Loader } from "@/components/Loader";
import { AlertDestructive, AlertNoCast } from "@/components/Alert";

/**
 * Component to display cast information for a movie or TV show.
 * @param {string} mediaType - The type of media (movie or TV show).
 * @returns {JSX.Element} The JSX representation of the Cast component.
 */
const Cast = ({ mediaType }) => {
  const { movieId, seriesId } = useParams();

  // Fetch cast data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["cast", mediaType === "tv" ? seriesId : movieId],
    queryFn: () =>
      fetchCast(mediaType === "tv" ? seriesId : movieId, mediaType),
  });

  // Display loader while data is being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Display error message if data fetching fails
  if (error) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <>
      {/* Display alert if no cast information is available */}
      {!isLoading && data.length === 0 && <AlertNoCast />}
      <div className="max-w-5xl py-4 text-xs">
        <ul className="grid grid-cols-4 sm:grid-cols-6 gap-4">
          {/* Map over cast data and display each actor */}
          {data.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : `https://placehold.co/185x278?text=${actor.name}`
                }
                alt={actor.name}
                className="rounded-lg mb-2"
              />
              <p className="font-bold">{actor.name}</p>
              <p className="text-muted-foreground">{actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cast;
