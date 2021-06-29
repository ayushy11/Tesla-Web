import React from "react";
import styled from "@emotion/styled";
import { Container, Section } from "../library";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

function Hero({ title, description, bgImageSrc, leftBtnText, rightBtnText }) {
  return (
    <>
      <Section
        h="100vh"
        w="100vw"
        bgImage={bgImageSrc}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          // border="2px solid orange"☺
          height="100vh"
        >
          <Fade bottom>
            <Box
              pt={{ xs: "6rem", sm: "6rem", lg: "5rem", xl: "10rem" }}
              textAlign="center"
            >
              <Heading as="h1">{title}</Heading>
              <Text textTransform="capitalize">{description}</Text>
            </Box>
          </Fade>

          <Flex alignItems="center" flexDirection="column">
            <Fade bottom>
              <Flex mb="2rem" flexDirection={{ xs: "column", sm: "row" }}>
                <Button>{leftBtnText}</Button>
                {rightBtnText && (
                  <Button variant="secondary">{rightBtnText}</Button>
                )}
              </Flex>
            </Fade>
            <Image
              h="2.8rem"
              overflowX="hidden"
              animation="animateDown infinite 1.5s"
              src="/images/down-arrow.svg"
            />
          </Flex>
        </Flex>
     </Section>
    </>
  );
}

export default Hero;
