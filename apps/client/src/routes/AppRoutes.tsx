import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(
  () => import("../components/product-list/ProductList")
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <ProductList />
          </Suspense>
        }
      />
    </Routes>
  );
}
