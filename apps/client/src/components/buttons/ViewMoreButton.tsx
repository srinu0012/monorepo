import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledViewMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: theme.typography.button.fontSize,
}));

const ViewMoreButton = ({
  fetchNextPage,
  hasNextPage,
}: {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}) => {
  return (
    <StyledViewMoreButton
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage}
    >
      View More
    </StyledViewMoreButton>
  );
};

export default ViewMoreButton;
