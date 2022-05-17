import { Flex, Link, Text } from "@chakra-ui/react";

export default function Genres({ companies }) {
  return (
    <Flex>
      <Text mr={2}>Produced By :</Text>
      <Flex gap=".5rem">
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
