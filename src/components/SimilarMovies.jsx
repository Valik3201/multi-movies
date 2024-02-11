import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { AlertDestructive } from "@/components/Alert";
import { fetchSimilarMovies } from "@/services/fetchSimilarMovies";
import MovieItem from "./MovieItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SimilarMovies = () => {
  const { movieId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["similar movies", movieId],
    queryFn: () => fetchSimilarMovies(movieId),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <>
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl pb-8">
        More like this
      </h2>

      <Carousel>
        <CarouselContent>
          {data.results.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/5">
              <MovieItem movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default SimilarMovies;
