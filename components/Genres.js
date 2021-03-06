import { Box, Flex } from "@chakra-ui/react";

export default function Genres({ genres }) {
  return (
    <Flex
      gap=".5rem"
      wrap="wrap"
      justify={{ base: "center", md: "flex-start" }}
    >
      {genres?.map((genre) => (
        <Box
          key={genre?.id}
          bg="red.500"
          color="white"
          fontSize="md"
          p=".5rem 1rem"
          borderRadius="5px"
          cursor="pointer"
          transition="all 300ms ease"
          _hover={{ bg: "red.700" }}
        >
          {genre?.name}
        </Box>
      ))}
    </Flex>
  );
}
