import { useQuery } from "@tanstack/react-query";
import { fetchTrendingData } from "@/services/fetchTrendingData";

import MovieItem from "@/components/MovieItem";
import { Loader } from "@/components/Loader";
import { AlertDestructive } from "@/components/Alert";

const Home = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tranding"],
    queryFn: fetchTrendingData,
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Trending Movies and TV Shows
      </h1>
      <div className="grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
