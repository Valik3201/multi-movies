import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * Component for rendering a destructive alert.
 * @param {string} message - The error message to display.
 * @returns {JSX.Element} The JSX representation of the AlertDestructive component.
 */
export const AlertDestructive = ({ message }) => {
  return (
    <Alert variant="destructive" className="max-w-2xl">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

/**
 * Component for rendering an informational alert indicating no search results.
 * @returns {JSX.Element} The JSX representation of the AlertInfo component.
 */
export const AlertInfo = () => {
  return (
    <Alert className="max-w-2xl">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Search Results</AlertTitle>
      <AlertDescription>
        Your search did not match any movies. Please try again with different
        keywords or filters.
      </AlertDescription>
    </Alert>
  );
};

/**
 * Component for rendering an alert indicating no cast information available.
 * @returns {JSX.Element} The JSX representation of the AlertNoCast component.
 */
export const AlertNoCast = () => {
  return (
    <Alert className="max-w-2xl mt-8">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Cast Information</AlertTitle>
      <AlertDescription>
        There is no information available about the cast for this movie.
      </AlertDescription>
    </Alert>
  );
};

/**
 * Component for rendering an alert indicating no reviews available.
 * @returns {JSX.Element} The JSX representation of the AlertNoReviews component.
 */
export const AlertNoReviews = () => {
  return (
    <Alert className="max-w-2xl mt-8">
      <InfoCircledIcon className="h-4 w-4 text-blue-500" />
      <AlertTitle>No Reviews Yet</AlertTitle>
      <AlertDescription>
        There are currently no reviews available for this movie.
      </AlertDescription>
    </Alert>
  );
};

/**
 * Component for rendering an alert indicating no similar movies or TV shows available.
 * @returns {JSX.Element} The JSX representation of the AlertNoSimilarMedia component.
 */
export const AlertNoSimilarMedia = () => {
  return (
    <Alert className="max-w-2xl mt-8" type="warning">
      <InfoCircledIcon className="h-4 w-4 text-yellow-500" />
      <AlertTitle>No Similar Movies or TV Shows</AlertTitle>
      <AlertDescription>
        There are currently no similar movies or TV shows available.
      </AlertDescription>
    </Alert>
  );
};
