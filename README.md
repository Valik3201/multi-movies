# Movie Search

This repository contains a basic routing application for movie search and storage, utilizing the themoviedb.org API for movie data retrieval.

## Backend

The backend of this application utilizes the version 3 of The Movie Database (TMDB) API to fetch movie-related data.

## Endpoints

Base URL: `https://api.themoviedb.org/3`

### Trending Movies

```
GET /trending/movie/{time_window}
```

| Parameter   | Type   | Description                                     |
| ----------- | ------ | ----------------------------------------------- |
| time_window | string | Time window for trending movies. Default: `day` |

### Movie Search

```
GET search/movie
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| query     | string | Search query for movie titles |
| year      | string | Filter movies by release year |

### Movie Details

```
GET movie/{movie_id}
```

| Parameter | Type  | Description            |
| --------- | ----- | ---------------------- |
| movie_id  | int32 | Unique ID of the movie |

### Movie Credits

```
GET /movie/{movie_id}/credits
```

| Parameter | Type  | Description            |
| --------- | ----- | ---------------------- |
| movie_id  | int32 | Unique ID of the movie |

### Movie Reviews

```
GET /movie/{movie_id}/reviews
```

| Parameter | Type  | Description            |
| --------- | ----- | ---------------------- |
| movie_id  | int32 | Unique ID of the movie |

## Routes

This application consists of the following routes. If a user attempts to access a non-existent route, they will be redirected to the home page.

| Route                      | Component    | Description                                        |
| -------------------------- | ------------ | -------------------------------------------------- |
| `/`                        | Home         | Home page with a list of popular movies            |
| `/movies`                  | Movies       | Page for movie search by keyword                   |
| `/movies/:movieId`         | MovieDetails | Detailed information about a specific movie        |
| `/movies/:movieId/cast`    | Cast         | Information about the cast of a specific movie     |
| `/movies/:movieId/reviews` | Reviews      | Information about the reviews for a specific movie |

## Code Splitting

Asynchronous JavaScript code loading has been implemented for the application routes using `React.lazy()` and `<Suspense>`. This allows for better performance and optimized resource utilization during navigation.

## Usage of Tanstack Query

Tanstack Query is used in this project for data fetching and state management. It provides a simple and concise API for declarative data fetching, automatic caching, and invalidation. Tanstack Query simplifies handling loading, error, and success states, making the codebase more maintainable and efficient.

Below is an example of how Tanstack Query is used in the application:

```javascript
// Importing necessary modules
import { useQuery } from "react-query";
import { fetchTrendingData } from "./api";

// Example usage in the Home component
const { isPending, isError, data, error } = useQuery({
  queryKey: ["trending"],
  queryFn: fetchTrendingData,
});

// Handling loading state
if (isPending) {
  return <Loader />;
}

// Handling error state
if (isError) {
  return <AlertDestructive message={error.message} />;
}
```

In the above example, useQuery hook from Tanstack Query is used to fetch trending movie data asynchronously. It provides states like isPending, isError, data, and error to handle different scenarios such as loading, error, and success.

## Styling

Styling for this project is achieved using the `shadcn/ui` library for UI components and Tailwind CSS for utility-based styling.

### shadcn/ui Implementation

In this project, the following components from the `shadcn/ui` library are utilized:

- **Alert:** Used for displaying informative or error messages to users.
- **Badge:** Employed for indicating status or labeling elements with small, contextual notifications.
- **Button:** Utilized for interactive elements such as buttons that trigger actions or navigation.
- **Card:** Used for displaying content in a structured and visually appealing manner.
- **Input:** Employed for capturing user input through forms or search fields.
- **Navigation Menu:** Utilized for creating navigation menus or sidebars for easy access to different sections of the application.

### Tailwind CSS Integration

Tailwind CSS is used for utility-based styling throughout the project. This includes defining styles for layout, typography, colors, and more by applying utility classes directly to HTML elements.

To watch for changes and rebuild the CSS when necessary, the following command can be run:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

By combining `shadcn/ui` for UI components and Tailwind CSS for utility-based styling, this project benefits from a streamlined development process, allowing for faster iteration and consistent design patterns throughout the application.

## Typography

Typography for this project is handled using the `non.geist` package, which allows for the usage of Vercel's Geist Sans and Geist Mono typefaces in non-Next.js projects.

### Implementation of `non.geist`

The `non.geist` package provides easy access to Vercel's typefaces, Geist Sans and Geist Mono, for projects outside of the Next.js ecosystem. It simplifies the process of using these typefaces by eliminating the need to manually manage assets or dependencies.

To use Geist Sans font in the project, the following import statement is used:

```javascript
import "non.geist";
```

To use Geist Mono font specifically, the following import statement is used:

```javascript
import "non.geist/mono";
```

### Why `non.geist`?

The decision to use `non.geist` is driven by the need for simplicity and convenience. While it's relatively straightforward to implement font faces using CSS, managing fonts as dependencies can add complexity to the project setup. non.geist simplifies this process, providing a hassle-free solution for incorporating Vercel's typefaces into non-Next.js projects.

This package offers a convenient alternative for developers who prefer the flexibility and ease of managing fonts through a package rather than manually handling font assets and dependencies.
