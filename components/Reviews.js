import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Review from "./Review";

export default function Reviews({ reviews }) {
  return (
    <Box>
      <Stack gap="2rem">
        {reviews?.map((review) => (
          <Review key={review?.id} review={review} />
        ))}
      </Stack>
    </Box>
  );
}
