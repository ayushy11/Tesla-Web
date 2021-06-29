import React, { useState } from "react";
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
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { selectCars } from "@/redux/slices/carSlice";
import { useSelector } from "react-redux";

function Navbar() {

  const cars = useSelector(selectCars);

  const [menuStatus, setMenuStatus] = useState(false);

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
      zIndex="1"
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
        {cars && cars.map((car, index) => (
          <Link p="0 10px" key={index}>{car}</Link>
        ))}

        {/* <Link p="0 10px">Model 3</Link>
        <Link p="0 10px">Model X</Link>
        <Link p="0 10px">Model Y</Link>
        <Link p="0 10px">Solar Roof</Link>
        <Link p="0 10px">Solar Panels</Link> */}
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
        <Link pr="0.2rem" onClick={() => setMenuStatus(true)}>Menu</Link>
      </Flex>
      <Flex
        pb="3rem"
        display={{ xs: "flex", sm: "none" }}
      >
        <HamburgerIcon cursor="pointer" onClick={() => setMenuStatus(true)} />
      </Flex>

      <Flex
        bg="white"
        flexDirection="column"
        position="fixed"
        top="0"
        bottom="0"
        right="0"
        width="19.3rem"
        zIndex="10"
        p="1.5rem"
        listStyleType="none"
        sx={{
          "li": {
            p: "1rem",
            borderBottom: "1px solid rgba(0,0,0,0.2)"
          },
        }}
        transform={menuStatus ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.2s ease-in"
      >
        <Flex justifyContent="flex-end">
          <CloseIcon cursor="pointer" onClick={() => setMenuStatus(false)} />
        </Flex>
        {cars && cars.map((car, index) => (
          <li><Link p="0 10px" key={index}>{car}</Link></li>
        ))}
        <li><Link fontWeight="600">Existing Inventory</Link></li>
        <li><Link fontWeight="600">Used Inventory</Link></li>
        <li><Link fontWeight="600">Trade-in</Link></li>
        <li><Link fontWeight="600">Cybertruck</Link></li>
        <li><Link fontWeight="600">Roadster</Link> </li>
      </Flex>

    </Container>
  );
}

export default Navbar;
