import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchReviews } from "@/services/fetchReviews";

import { Loader } from "@/components/Loader";
import { AlertDestructive, AlertNoReviews } from "@/components/Alert";

import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Reviews component displays reviews for a specific movie or TV show.
 * @param {string} mediaType - The type of media (movie or TV show).
 * @returns {JSX.Element} - JSX element representing the Reviews component.
 */
const Reviews = ({ mediaType }) => {
  const { movieId, seriesId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews", mediaType === "tv" ? seriesId : movieId],
    queryFn: () =>
      fetchReviews(mediaType === "tv" ? seriesId : movieId, mediaType),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <AlertDestructive message={error.message} />;
  }

  return (
    <>
      {!isLoading && data.length === 0 && <AlertNoReviews />}

      <ul className="flex flex-col w-full max-w-5xl items-start gap-4 py-4">
        {data.map((review) => (
          <li key={review.id} className="min-w-full">
            <Card>
              <CardHeader>
                <CardTitle>{review.author}</CardTitle>
                <CardDescription>
                  {format(new Date(review.created_at), "HH:mm, MMMM d, yyyy")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(
                  review.content
                ) ? (
                  <p>{parse(review.content)}</p>
                ) : (
                  <ReactMarkdown>{review.content}</ReactMarkdown>
                )}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
