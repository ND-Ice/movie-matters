import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

export default function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const activeColor = useColorModeValue("gray.900", "white");
  return (
    <NextLink href={href}>
      <Link
        p="10px 20px"
        borderRadius=".3rem"
        bg={isActive ? "red.500" : undefined}
        color={isActive ? "white" : activeColor}
      >
        {children}
      </Link>
    </NextLink>
  );
}
