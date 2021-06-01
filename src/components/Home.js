import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";

function Home() {
  return (
    <Container>
        <Header/>

      <Section
        title="Model S"
        description="orter online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model y"
        description="orter online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="orter online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="orter online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panel in India"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Cost For Less The New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"

      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"

 />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
