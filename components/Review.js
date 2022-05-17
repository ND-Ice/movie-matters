import moment from "moment";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import concatenate from "./utilities/concatenate";

export default function Review({ review }) {
  return (
    <Box>
      <Flex align="center" gap={5}>
        <Image
          src={`https://www.gravatar.com/avatar/${review?.author_details?.avatar_path}`}
          borderRadius="50%"
          alt="user avatar"
          w="80px"
          h="80px"
        />
        <Box>
          <Heading as="h1" size="md" fontWeight={500}>
            {review?.author}
          </Heading>
          <Text textTransform="uppercase" fontWeight={500} fontSize="xs">
            {moment(review?.created_at).startOf("day").fromNow()}
          </Text>
        </Box>
      </Flex>
      <Text mt={5}>{concatenate(review?.content, 500)}</Text>
    </Box>
  );
}
