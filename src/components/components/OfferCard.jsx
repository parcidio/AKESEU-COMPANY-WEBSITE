import React from "react";
import { Div, Col, Anchor, Text, Button, Icon } from "atomize";

const OfferCard = (props) => {
  return (
    <Col size={{ xs: 12, lg: 3 }} d="flex" justify="center">
      <div
        style={{
          border: "solid 1px  black",
          borderRadius: 5,
          backgroundColor: "white",
          width: "100%",
          margin: "1rem",
        }}
      >
        <Div
          shadow="0 10px 24px -10px rgba(0, 0, 0, 0.08)"
          rounded="12px"
          h="auto"
          w="100%"
          d="flex"
          flexDir="column"
          align="center"
          justify="center"
          p={{ t: "40px", b: "20px" }}
        >
          <Text
            tag="h3"
            textSize="subheader"
            textColor="dark"
            textWeight="400"
            p="10px"
            textAlign={{ xs: "center", lg: "center" }}
          >
            {props.title}
          </Text>
          <div
            style={{
              borderBottom: "solid 1px black",
              borderTop: "solid 1px black",
              padding: "10px",
              margin: "10px",
              fontStyle: "italic",
              textAlign: "center",
              height: "10rem",
              width: "80%",
            }}
          >
            {props.description}
          </div>
          <Anchor href="www.linkedin.com/in/parcidio-andre" target="_blank">
            <Button
              h="2.5rem"
              p={{ x: "1rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="#FFFFFF"
              suffix={
                <Icon
                  name="LongRight"
                  size="16px"
                  color="info700"
                  m={{ l: "1rem" }}
                />
              }
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              Read more
            </Button>
          </Anchor>
        </Div>
      </div>
    </Col>
  );
};

export default OfferCard;
