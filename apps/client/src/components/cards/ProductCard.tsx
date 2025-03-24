import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductType } from "shared";
import AddToCartButton from "../buttons/AddToCartButton";

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[1],
}));

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="100%"
        image={product.thumbnail_url}
        alt={product.title}
        loading="lazy"
      />
      <CardContent>
        <Typography>{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <AddToCartButton />
      </CardContent>
    </StyledCard>
  );
};

export default React.memo(ProductCard);
