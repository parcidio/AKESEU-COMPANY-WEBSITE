import React from "react";
import { Div, Col, Row, Container, Text } from "atomize";
import "./containers.css";

const About = () => {
  return (
    <div style={{ borderBottom: "solid 1px black" }}>
      <Container
        bg="#FFFFFF"
        h="50%"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        p="4rem"
      >
        <Div w="100%" d="flex" flexDir="column" justify="center" align="center">
          <Text
            tag="h1"
            textSize="display2"
            m={{ b: "2rem" }}
            textColor="dark"
            textWeight="600"
            textAlign={{ xs: "center", lg: "center" }}
          >
            About
          </Text>
          <Row w="100%" d="flex" justify="center">
            <Col size={{ xs: 12, lg: 4 }}>
              <Text
                tag="h3"
                textSize="display1"
                textColor="dark"
                textWeight="400"
                textAlign={{ xs: "center", lg: "center" }}
              >
                Our vision
              </Text>

              <Text
                tag="h1"
                textColor="black"
                textSize="subheader"
                textAlign={{ xs: "center", lg: "center" }}
                textWeight="300"
                p={{ l: "20px", r: "20px" }}
              >
                Become a technological driving force in Namibia
              </Text>
            </Col>
            <Col size={{ xs: 12, lg: 4 }}>
              <Text
                tag="h3"
                textSize="display1"
                textColor="dark"
                textWeight="400"
                textAlign={{ xs: "center", lg: "center" }}
              >
                Our values
              </Text>

              <Text
                tag="h1"
                textColor="black"
                textSize="subheader"
                textAlign={{ xs: "justify", lg: "justify" }}
                textWeight="300"
                p={{ l: "20px", r: "20px" }}
              >
                Become a technological driving force in Namibia. Become a
                technological driving force in Namibia. Become a technological
                driving force in Namibia. Become a technological driving force
                in Namibia. Become a technological driving force in Namibia.
              </Text>
            </Col>
            <Col size={{ xs: 12, lg: 4 }}>
              <Text
                tag="h3"
                textSize="display1"
                textColor="dark"
                textWeight="400"
                textAlign={{ xs: "center", lg: "center" }}
              >
                Our mission
              </Text>

              <Text
                tag="h1"
                textColor="black"
                textSize="subheader"
                textAlign={{ xs: "center", lg: "center" }}
                textWeight="300"
                p={{ l: "20px", r: "20px" }}
              >
                Become a technological driving force in Namibia
              </Text>
            </Col>
          </Row>
        </Div>
      </Container>
    </div>
  );
};

export default About;
