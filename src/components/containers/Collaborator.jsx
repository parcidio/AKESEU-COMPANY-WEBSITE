import React from "react";
import { Div, Row, Text, Image } from "atomize";
import "./containers.css";

import Collaborators from "../../data/Collanorators";
const Collaborator = () => {
  return (
    <div style={{ borderBottom: "solid 1px black" }}>
      <Div
        bg="#FFFFFF"
        h="50%"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        p={{ t: "4rem", b: "1rem", r: "4rem", l: "4rem" }}
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
            Our Collaborators
          </Text>
          <Row w="100%" d="flex" justify="center" align="center">
            {Collaborators.map((collaborator) => (
              <Image bg="gray800" h="5rem" w="auto" src={collaborator.logo} />
            ))}
          </Row>
        </Div>
      </Div>
    </div>
  );
};

export default Collaborator;
