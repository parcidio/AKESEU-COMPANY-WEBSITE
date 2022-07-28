import React from "react";
import { Div, Row, Text } from "atomize";
import "./containers.css";
import { OfferCard } from "../Components";
import OfferData from "../../data/Offer";

const Offer = () => {
  return (
    <div style={{ borderBottom: "solid 1px black" }}>
      <Div
        bg="gray300"
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
            What we offer
          </Text>
          <Row w="100%" d="flex">
            {OfferData.map((offer) => (
              <OfferCard title={offer.title} description={offer.description} />
            ))}
          </Row>
        </Div>
      </Div>
    </div>
  );
};

export default Offer;
