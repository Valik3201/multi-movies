import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/services/searchMovies";
import { RotateCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Loader } from "@/components/Loader";
import { AlertDestructive, AlertInfo } from "@/components/Alert";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import MediaItem from "@/components/MediaItem";

/**
 * Component for searching movies based on title and release year.
 * Displays a form with inputs for title search and year selection.
 * Renders search results in a grid of MediaItem components.
 * @returns {JSX.Element} The JSX representation of the Movies component.
 */
const Movies = () => {
  const searchInputRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["searchMovies"],
    queryFn: async () => {
      return await searchMovies({
        query: searchInputRef.current?.value.trim(),
        include_adult: false,
        language: "en-US",
        primary_release_year: selectedYear.trim(),
        page: 1,
        region: "",
        year: "",
      });
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value.trim();

    setSearchParams({
      query: searchQuery,
      ...(selectedYear && { year: selectedYear }),
    });

    refetch({
      query: searchQuery,
      include_adult: false,
      language: "en-US",
      primary_release_year: selectedYear,
      page: 1,
      region: "",
      year: "",
    });
  };

  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 10;

  const yearOptions = [];

  for (let year = maxYear; year >= maxYear - 100; year--) {
    yearOptions.push(year);
  }

  const handleReset = () => {
    form.reset();
    setSearchParams({});
    searchInputRef.current.value = "";
    setSelectedYear("");
  };

  useEffect(() => {
    const q = searchParams.get("query") || "";
    const year = searchParams.get("year") || "";

    searchInputRef.current.value = q;
    setSelectedYear(year);
  }, [searchParams]);

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Search Movies
      </h1>
      <Form {...form}>
        <form
          className="flex flex-wrap gap-2 w-full items-start gap-2 pb-8"
          onSubmit={handleSearch}
        >
          <FormItem className="flex flex-grow">
            <Input
              type="text"
              ref={searchInputRef}
              placeholder="Enter movie title"
              className="flex-grow"
              required
            />
            <FormMessage />
          </FormItem>

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="flex flex-grow min-w-44">
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedYear(value);
                  }}
                  value={selectedYear}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select released year" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {yearOptions.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="button" onClick={handleReset} variant="secondary">
            <RotateCcwIcon className="mr-2 h-4 w-4" /> Reset
          </Button>

          <Button type="submit" className="flex flex-auto">
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>
      </Form>
      {isLoading && <Loader />}
      {isError && <AlertDestructive message={error.message} />}
      {!isLoading && searchParams.has("query") && data?.length === 0 && (
        <AlertInfo />
      )}
      {data && !isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results.map((movie) => (
            <MediaItem movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
