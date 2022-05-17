import { Box } from "@chakra-ui/react";
import Pagination from "./Pagination";
import MobilePagination from "./MobilePagination";

export default function ResponsivePagination({
  pagesQuantity = 100,
  currentPage = 1,
  onPageChange,
  onPrev,
  onNext,
}) {
  return (
    <Box mt={10} w="full">
      <Box display={{ base: "none", md: "block" }}>
        <Pagination
          pagesQuantity={pagesQuantity}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </Box>
      <Box display={{ md: "none" }}>
        <MobilePagination
          totalPage={pagesQuantity}
          currentPage={currentPage}
          onPrev={onPrev}
          onNext={onNext}
        />
      </Box>
    </Box>
  );
}
