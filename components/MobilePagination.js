import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function MobilePagination({
  currentPage = 1,
  totalPage = 400,
  onPrev,
  onNext,
}) {
  return (
    <Flex justify="space-between" align="center" maxW="300px" mx="auto">
      <Button disabled={currentPage == 1} onClick={onPrev}>
        <ArrowLeftIcon />
      </Button>
      <Text>
        {currentPage} / {totalPage}
      </Text>
      <Button disabled={currentPage === totalPage} onClick={onNext}>
        <ArrowRightIcon />
      </Button>
    </Flex>
  );
}
