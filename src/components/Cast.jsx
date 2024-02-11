import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchCast } from "@/services/fetchCast";

import { Loader } from "@/components/Loader";
import { AlertDestructive, AlertNoCast } from "@/components/Alert";

const Cast = ({ mediaType }) => {
  const { movieId, seriesId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cast", mediaType === "tv" ? seriesId : movieId],
    queryFn: () =>
      fetchCast(mediaType === "tv" ? seriesId : movieId, mediaType),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <>
      {!isLoading && data.length === 0 && <AlertNoCast />}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-5xl py-4 text-xs">
        {data.map((actor) => (
          <ul key={actor.id}>
            <li>
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
          </ul>
        ))}
      </div>
    </>
  );
};

export default Cast;
