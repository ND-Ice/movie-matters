import React from "react";
import Link from "next/link";
import ColorModeToggle from "./ColorModeToggle";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box
      as="nav"
      top={0}
      pos="sticky"
      zIndex={10}
      backdropFilter="blur(10px)"
      p={{ base: "1rem", md: "2rem 5rem 1rem 5rem" }}
    >
      <Flex gap="1rem" align="center" justify="space-between">
        <Link href="/">
          <Flex gap={1} align="center">
            <Heading size="3xl" color="red.500">
              M
            </Heading>
            <Box display="grid" alignItems="center">
              <Heading fontSize={{ base: "sm", md: "lg" }} letterSpacing={1}>
                OVIES
              </Heading>
              <Heading
                fontSize={{ base: "ms", md: "lg" }}
                letterSpacing={1}
                color="red.500"
              >
                ATTERS
              </Heading>
            </Box>
          </Flex>
        </Link>

        <Flex align="center" display={{ base: "none", lg: "flex" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/latest">Latest Updates</NavLink>
          <NavLink href="/trending">Trending</NavLink>
          <NavLink href="/upcoming">Upcoming Movies</NavLink>
        </Flex>

        <Flex gap={2}>
          <ColorModeToggle />
          <Box display={{ lg: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList p={2}>
                <MobileMenuItem href="/">Home</MobileMenuItem>
                <MobileMenuItem href="/latest">Latest Movies</MobileMenuItem>
                <MobileMenuItem href="/trending">
                  Trending Movies
                </MobileMenuItem>
                <MobileMenuItem href="/upcoming">
                  Upcoming Movies
                </MobileMenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const MobileMenuItem = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname == href;

  return (
    <Link href={href}>
      <MenuItem
        borderRadius={5}
        bg={isActive ? "red.400" : "none"}
        color={isActive ? "white" : "none"}
        transition="all 300ms ease"
        _hover={{
          bg: isActive ? "red.400" : "none",
          color: isActive ? "none" : "red.400",
        }}
      >
        {children}
      </MenuItem>
    </Link>
  );
};
