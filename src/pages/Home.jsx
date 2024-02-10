import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchTrendingData } from "@/services/fetchTrendingData";

import MovieItem from "@/components/MovieItem";
import { AlertDestructive } from "@/components/Alert";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["tranding", page],
    queryFn: () => fetchTrendingData(page),
  });

  const nextPage = () => {
    const nextPageValue = String(Number(page) + 1);
    setSearchParams({ page: nextPageValue });
  };

  const prevPage = () => {
    if (page > 1) {
      const prevPageValue = String(Number(page) - 1);
      setSearchParams({ page: prevPageValue });
    }
  };

  if (isLoading) {
    return (
      <>
        <Skeleton className="h-12 w-full mb-8" />
        <div className="grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(20)].map((_, index) => (
            <div className="flex flex-col gap-2">
              <Skeleton
                key={index}
                className="h-[270px] w-[180px] rounded-lg"
              />

              <Skeleton className="h-4 w-[56px]" />

              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-4 w-[40px]" />
            </div>
          ))}
        </div>
      </>
    );
  }

  if (isError) {
    return <AlertDestructive message={error.message} />;
  }

  const totalPages = data.total_pages;
  const currentPage = parseInt(page, 10);

  let pages = [];

  pages.push(currentPage);

  for (let i = 1; i <= 2; i++) {
    if (currentPage - i > 0) {
      pages.unshift(currentPage - i);
    }
  }

  for (let i = 1; i <= 2; i++) {
    if (currentPage + i <= totalPages) {
      pages.push(currentPage + i);
    }
  }

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Trending Movies and TV Shows
      </h1>

      <div className="grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
      <Pagination className="pt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} disabled={page === "1"} />
          </PaginationItem>
          {pages.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                onClick={() => setSearchParams({ page: String(pageNumber) })}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Home;
