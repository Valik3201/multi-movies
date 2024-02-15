import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { AlertDestructive, AlertNoSimilarMedia } from "@/components/Alert";
import { fetchSimilarMovies } from "@/services/fetchSimilarMovies";
import MovieItem from "./MediaItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Similar component displays movies or TV shows similar to the current one.
 * @param {Object} props - Component props.
 * @param {string} props.mediaType - The type of media ("movie" or "tv").
 * @returns {JSX.Element} - JSX element representing the Similar component.
 */
const Similar = ({ mediaType }) => {
  const { movieId, seriesId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["similar", mediaType === "tv" ? seriesId : movieId],
    queryFn: () =>
      fetchSimilarMovies(mediaType === "tv" ? seriesId : movieId, mediaType),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <>
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        More like this
      </h2>

      {!isLoading && data.results.length === 0 && <AlertNoSimilarMedia />}

      <div className="container">
        {data.results.length !== 0 && (
          <Carousel className="pt-8">
            <CarouselContent>
              {data.results.map((movie) => (
                <CarouselItem
                  key={movie.id}
                  className="md:basis-1/2 lg:basis-1/5"
                >
                  <MovieItem movie={movie} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Similar;
