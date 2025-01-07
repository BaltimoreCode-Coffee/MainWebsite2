import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  pageCount,
  classes,
  handlePageChange,
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        className={classes}
        count={pageCount}
        onChange={handlePageChange}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
}
