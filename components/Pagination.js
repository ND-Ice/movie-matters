import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
} from "chakra-paginator";

export default function Pagination({
  currentPage,
  onPageChange,
  pagesQuantity,
}) {
  const outerLimit = 2;
  const innerLimit = 2;

  return (
    <Paginator
      pagesQuantity={pagesQuantity}
      currentPage={currentPage}
      onPageChange={onPageChange}
      outerLimit={outerLimit}
      innerLimit={innerLimit}
      activeStyles={activeStyles}
      normalStyles={normalStyles}
      separatorStyles={separatorStyles}
    >
      <Container align="center" justify="space-between" w="full">
        <Previous mr={1}>
          <ArrowLeftIcon />
        </Previous>
        <PageGroup
          isInline
          isTruncated
          align="center"
          w="full"
          justify="center"
        />
        <Next ml={1}>
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

const separatorStyles = {
  ...baseStyles,
  fontSize: "xs",
  p: 0,
};
