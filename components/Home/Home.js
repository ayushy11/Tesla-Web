import React from "react";
import styled from "@emotion/styled";
import { Container, Section } from "../library";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import Hero from "../common/Hero";

// import { Button } from "@/lib/theme/Button";

// import Section from "../common/Section";

function Home() {
  return (
    <>
      <Container height="100vh">
        <Hero
          title="Model S"
          description="Order Online for Touchless Delivery"
          bgImageSrc="/images/model-s-new.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Hero
          title="Model Y"
          description="Order Online for Touchless Delivery"
          bgImageSrc="/images/model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Hero
          title="Model 3"
          description="Order Online for Touchless Delivery"
          bgImageSrc="/images/model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Hero
          title="Model X"
          description="Order Online for Touchless Delivery"
          bgImageSrc="/images/model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Hero
          title="Solar Panels"
          description="Lower cost Solar panels"
          bgImageSrc="/images/solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Hero
          title="Solar Roof"
          description="Produce clean energy from your roof"
          bgImageSrc="/images/solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
        <Hero
          title="Accessories"       
          bgImageSrc="/images/accessories.jpg"
          leftBtnText="Shop now"          
        />
      </Container>
    </>
  );
}

export default Home;
