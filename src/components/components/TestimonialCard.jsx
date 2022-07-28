import React from "react";
import { Div, Col, Row, Anchor, Text, Button, Icon } from "atomize";

const TestimonialCard = (props) => {
  return (
    <Div
      bg="gray300"
      rounded="12px"
      h="auto"
      w="100%"
      d="flex"
      align="center"
      p="20px"
      m="10px"
    >
      <Div
        bg="#063159"
        rounded="circle"
        h="4rem"
        w="5rem"
        d="flex"
        flexDir="column"
        align="center"
        justify="center"
        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        bgSize="cover"
        bgPos="center"
      ></Div>
      <Div d="flex" flexDir="column" w="100%">
        <Text
          tag="h3"
          textSize="subheader"
          textColor="dark"
          textWeight="400"
          p="10px"
          textAlign={{ xs: "center", lg: "center" }}
        >
          {props.name}
        </Text>

        <div
          style={{
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {`"${props.testimonial}"`}
        </div>
      </Div>
    </Div>
  );
};

export default TestimonialCard;
