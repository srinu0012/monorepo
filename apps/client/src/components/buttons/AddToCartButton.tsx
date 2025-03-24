import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledAddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: theme.typography.button.fontWeight,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "scale(1.05)",
  },
}));

const AddToCartButton = () => {
  return (
    <StyledAddToCartButton variant="contained">
      Add To Cart
    </StyledAddToCartButton>
  );
};

export default AddToCartButton;
