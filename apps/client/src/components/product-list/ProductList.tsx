import React from "react";
import { styled } from "@mui/material/styles";
import ProductCard from "../cards/ProductCard";
import { ProductType } from "shared";
import ViewMoreButton from "../buttons/ViewMoreButton";
import Box from "@mui/material/Box";
import { useProducts } from "../../hooks/useProductHook";

const ProductList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage } = useProducts();

  return (
    <Container>
      <ProductGrid>
        {data?.pages.map((page, pageIndex) =>
          page.products.map((product: ProductType) => (
            <ProductItem key={`${pageIndex}-${product.id}`}>
              <ProductCard product={product} />
            </ProductItem>
          ))
        )}
      </ProductGrid>
      <ViewMoreButton fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />
    </Container>
  );
};

export default ProductList;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  width: "100%",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const ProductGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: theme.spacing(3),
  width: "100%",
  justifyContent: "center",
  paddingBottom: theme.spacing(3),
}));

const ProductItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(2),
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[6],
  },
}));
