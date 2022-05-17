import { Flex, Link, Text } from "@chakra-ui/react";

export default function Genres({ companies }) {
  return (
    <Flex wrap="wrap" justify={{ base: "center", md: "flex-start" }}>
      <Text mr={2} mb=".5rem">
        Produced By :
      </Text>
      <Flex
        gap=".5rem"
        wrap="wrap"
        justify={{ base: "center", md: "flex-start" }}
      >
        {companies?.map((company, index) =>
          companies?.length - 1 === index ? (
            <Link>{company?.name}</Link>
          ) : (
            <Link>{company?.name} ,</Link>
          )
        )}
      </Flex>
    </Flex>
  );
}
