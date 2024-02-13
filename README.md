# Multi Movies

<p float="left">
  <img src="/assets/mm-1.jpeg" width="49.7%" />
  <img src="/assets/mm-4.jpeg" width="49.7%" /> 
</p>

Multi Movies is a React application powered by the themoviedb.org API. It is built with Vite for rapid development, deployed on Vercel for seamless hosting, and utilizes Tanstack Query, shadcn/ui, and Tailwind CSS for functionality and styling. The application offers a collection of trending movies and TV shows, with search capabilities allowing users to find specific titles. Additionally, the detailed page for each movie or TV show provides essential information, including cast details, reviews, and recommendations for similar movies or TV shows.

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat)
![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-ef4444?style=flat)
![shadcn/ui Badge](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)

## Backend

The backend of this application utilizes the version 3 of The Movie Database (TMDB) API to fetch movie-related data.

## Endpoints

Base URL: `https://api.themoviedb.org/3`

### Trending Movies and TV Shows

```
GET /trending/all/{time_window}
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

### TV Show Details

```
GET tv/{series_id}
```

| Parameter | Type  | Description                 |
| --------- | ----- | --------------------------- |
| series_id | int32 | Unique ID of the tv series  |

### Similar Movies or TV Shows

```
GET tv/{series_id}/similar
```
```
GET movie/{movie_id}/similar
```

| Parameter | Type  | Description                 |
| --------- | ----- | --------------------------- |
| series_id | int32 | Unique ID of the tv series  |
| movie_id  | int32 | Unique ID of the movie      |

## Routes

This application consists of the following routes. If a user attempts to access a non-existent route, they will be redirected to the home page.

| Route                      | Component    | Description                                          |
| -------------------------- | ------------ | ---------------------------------------------------- |
| `/`                        | Home         | Home page with a list of popular movies and TV shows |
| `/movies`                  | Movies       | Page for movie search by keyword                     |
| `/movies/:movieId`         | MediaDetails | Detailed information about a specific movie          |
| `/tv/:seriesId`            | MediaDetails | Detailed information about a specific TV show        |

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

- **Accordion.jsx:** A vertically stacked set of interactive headings that each reveal a section of content.
- **Alert.jsx:** Displays a callout for user attention.
- **Badge.jsx:** Displays a badge or a component that looks like a badge.
- **Button.jsx:** Displays a button or a component that looks like a button.
- **Card.jsx:** Displays a card with header, content, and footer.
- **Carousel.jsx:** A carousel with motion and swipe built using Embla.
- **DropdownMenu.jsx:** Displays a menu to the user — such as a set of actions or functions — triggered by a button (for theme toggle).
- **Form.jsx:** The `<Form />` component is a wrapper around the react-hook-form library.
- **Input.jsx:** Displays a form input field or a component that looks like an input field.
- **Pagination.jsx:** Pagination with page navigation, next and previous links.
- **Select.jsx:** Displays a list of options for the user to pick from—triggered by a button.
- **Skeleton.jsx:** Used to show a placeholder while content is loading.

> [!WARNING]
> The `shadcn/ui` Select component does not function correctly in the Safari browser on mobile devices.

### Tailwind CSS Integration

Tailwind CSS is used for utility-based styling throughout the project. This includes defining styles for layout, typography, colors, and more by applying utility classes directly to HTML elements.

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


  <img src="/assets/mm-2.jpeg"/>
  <img src="/assets/mm-3.jpeg"/> 

