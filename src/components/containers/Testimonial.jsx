import React from "react";
import { Div, Col, Text } from "atomize";
import "./containers.css";
import { TestimonialCard } from "../Components";
import TestimonialData from "../../data/Testimonial";

const Testimonial = () => {
  return (
    <div>
      <Div
        h="50%"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        p="3rem"
      >
        <Div w="100%" d="flex" flexDir="column">
          <Text
            tag="h1"
            textSize="display2"
            m={{ b: "2rem" }}
            textColor="dark"
            textWeight="600"
            textAlign={{ xs: "center", lg: "center" }}
          >
            What we offer
          </Text>

          {TestimonialData.map((person) => (
            <TestimonialCard
              name={person.name}
              testimonial={person.testimonial}
            />
          ))}
        </Div>
      </Div>
    </div>
  );
};

export default Testimonial;
