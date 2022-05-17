import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
} from "chakra-paginator";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function Pagination({
  currentPage,
  onPageChange,
  pagesQuantity,
}) {
  const outerLimit = 3;
  const innerLimit = 3;

  return (
    <Paginator
      pagesQuantity={pagesQuantity}
      currentPage={currentPage}
      onPageChange={onPageChange}
      outerLimit={outerLimit}
      innerLimit={innerLimit}
      activeStyles={activeStyles}
      normalStyles={normalStyles}
    >
      <Container align="center" justify="space-between" w="full">
        <Previous>
          <ArrowLeftIcon />
        </Previous>
        <PageGroup isInline align="center" w="full" justify="center" />
        <Next>
          <ArrowRightIcon />
        </Next>
      </Container>
    </Paginator>
  );
}

const baseStyles = {
  fontSize: "sm",
  p: "1rem",
};

const normalStyles = {
  ...baseStyles,
  _hover: {
    bg: "red.500",
    color: "white",
  },
};

const activeStyles = {
  ...baseStyles,
  _hover: {
    bg: "red.500",
    color: "white",
  },
  bg: "red.500",
  color: "white",
};
