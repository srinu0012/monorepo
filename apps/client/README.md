# Infinite Scroll Pagination with React Query (useInfiniteQuery)

This project implements infinite scrolling pagination using **React Query (`useInfiniteQuery`)**, **Axios**, and **React**. The application fetches products from an API and dynamically loads more data as the user clicks "View More".

## Features

- **Infinite Scrolling with `useInfiniteQuery`**
- **Optimized API Calls using Axios**
- **Material-UI Components**

### 1 Install Dependencies

Using `pnpm` (recommended for monorepo users):

```sh
pnpm install
```

### 2 Start the Development Server

```sh
pnpm dev
```

## API Endpoint

This project fetches products from:

```sh
GET http://localhost:3300/api/v1/products?limit=10&skip=0
```

- `limit` → Number of products per request
- `skip` → Offset for pagination

## Code Breakdown

### **Fetching Data with `useInfiniteQuery`**

The `useProducts` hook uses React Query's `useInfiniteQuery` to fetch paginated data.

## How Pagination Works

1. **Initial API Call:** Fetches the first set of products with `skip=0`.
2. **Fetching More Data:** When clicking "View More", `fetchNextPage` is triggered.
3. **getNextPageParam:** Computes the `skip` value dynamically.
4. **Appending Data:** `useInfiniteQuery` automatically merges new pages with previous ones.

## Technologies Used

- **React** (Frontend)
- **React Query (`useInfiniteQuery`)** (Data Fetching)
- **Axios** (API Requests)
- **Material UI** (Styling)
