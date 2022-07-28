import React from "react";
import { Div, Container, Text } from "atomize";
import "./containers.css";

const Header = () => {
  return (
    <Div
      bg="#063159"
      h="70vh"
      d="flex"
      flexDir="column"
      justify="center"
      align="center"
    >
      <Container d="flex" flexDir="column" justify="center" align="center">
        <Text
          tag="h1"
          m={{ b: "4rem" }}
          textColor="#FFFFFF"
          textSize="display3"
          textWeight="600"
          textAlign={{ xs: "center", lg: "center" }}
          p="20px"
        >
          Design the future right now
        </Text>
        <Text
          tag="h1"
          m={{ b: "4rem" }}
          textColor="gray500"
          textSize="subheader"
          textAlign={{ xs: "center", lg: "center" }}
          textWeight="300"
          p={{ l: "20px", r: "20px" }}
        >
          A company that helps you develop solution that provide consistent
          results
        </Text>
      </Container>
    </Div>
  );
};

export default Header;
