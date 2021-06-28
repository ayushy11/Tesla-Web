import React from "react";
import styled from "@emotion/styled";
import { Container, Section } from "../library";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  return (
    <Container
      width="100vw"
      position="fixed"
      top="0"
      // left="0"
      // right="0"
      minHeight="3.875rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="0 1.3rem"
    //   border="2px solid green"
    >
      <Link isExternal>
        <Image h="8rem" src="/images/logo-new.svg" pb="3rem" pl={{ xs: "0rem", sm: "2rem" }} />
      </Link>
      <Flex
        ml="4rem"
        px="1rem"
        alignItems="center"
        justifyContent="space-between"
        width="46%"
        pb="3rem"
        fontWeight="600"
        flexWrap="nowrap"
        display={{ xs: "none", sm: "flex" }}
      >
        <Link p="0 10px">Model S</Link>
        <Link p="0 10px">Model 3</Link>
        <Link p="0 10px">Model X</Link>
        <Link p="0 10px">Model Y</Link>
        <Link p="0 10px">Solar Roof</Link>
        <Link p="0 10px">Solar Panels</Link>
      </Flex>
      <Flex
        pb="3rem"
        px="1rem"
        alignItems="center"
        display={{ xs: "none", sm: "flex" }}
        justifyContent="space-between"
        width={{ xs: "55%", sm: "18%" }}
        fontWeight="600"
        flexWrap="nowrap"
      >
        <Link pr="0.2rem">Shop</Link>
        <Link pr="0.2rem">Account</Link>
        <Link pr="0.2rem">Menu</Link>
      </Flex>
      <Flex
        pb="3rem"
        display={{ xs: "flex", sm: "none" }}
      >
        <HamburgerIcon cursor="pointer" />
      </Flex>
    </Container>
  );
}

export default Navbar;
