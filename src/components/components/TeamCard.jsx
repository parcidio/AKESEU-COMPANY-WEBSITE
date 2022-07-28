import React from "react";
import { Div, Col, Anchor, Text, Button, Icon } from "atomize";

const TeamCard = (props) => {
  return (
    <Col size={{ xs: 12, lg: 3 }}>
      <div
        style={{
          border: "solid 1px black",
          borderRadius: 5,
          backgroundColor: "white",
          margin: "1rem",
        }}
      >
        <Div
          shadow="0 10px 24px -10px rgba(0, 0, 0, 0.08)"
          rounded="12px"
          h="auto"
          d="flex"
          flexDir="column"
          align="center"
          justify="center"
          p={{ t: "40px", b: "20px" }}
        >
          <Div
            bg="#063159"
            rounded="circle"
            h="10rem"
            w="10rem"
            d="flex"
            flexDir="column"
            align="center"
            justify="center"
            bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            bgSize="cover"
            bgPos="center"
          ></Div>
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

          <Text
            tag="h1"
            textColor="black"
            textSize="paragraph"
            textAlign={{ xs: "center", lg: "center" }}
            textWeight="300"
            p={{ l: "20px", r: "20px" }}
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
            }}
          >
            {`"${props.quote}"`}
          </div>
          <Anchor href="www.linkedin.com/in/parcidio-andre" target="_blank">
            <Button
              bg="info800"
              textColor="#FFFFFF"
              suffix={
                <Icon
                  name="Linkedin"
                  size="16px"
                  color="#FFFFFF"
                  m={{ l: "1rem" }}
                />
              }
              shadow="3"
              hoverShadow="4"
              m={{ r: "1rem" }}
            >
              Get in touch
            </Button>
          </Anchor>
        </Div>
      </div>
    </Col>
  );
};

export default TeamCard;
