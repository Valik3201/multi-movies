import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const AlertDestructive = ({ message }) => {
  return (
    <Alert variant="destructive" className="max-w-2xl">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

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
