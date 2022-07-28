import React from "react";
import { Div, Icon, Text, Input, Textarea, Button } from "atomize";
import "./containers.css";

const Contact = () => {
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
        <Div w="100%" d="flex" flexDir="column" justify="center" align="center">
          <Text
            tag="h1"
            textSize="display2"
            m={{ b: "2rem" }}
            textColor="dark"
            textWeight="600"
            textAlign={{ xs: "center", lg: "center" }}
          >
            Get in Touch
          </Text>
          <Text
            textColor="gray600"
            textSize="paragraph"
            textAlign={{ xs: "center", lg: "center" }}
            textWeight="300"
          >
            <Icon
              name="LocationSolid"
              size="20px"
              color="#063159"
              m={{ r: "1rem" }}
            />
            Address: Namibia, Windhoek, Rocky Crest, *iland
          </Text>
          <Text
            textColor="gray600"
            textSize="paragraph"
            textAlign={{ xs: "center", lg: "center" }}
            textWeight="300"
          >
            <Icon name="Mail" size="20px" color="#063159" m={{ r: "1rem" }} />
            Email: akseu@gmail.com / phone : 0816165751
          </Text>
        </Div>
        <div
          style={{
            border: "1px solid black",
            width: "100%",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Input placeholder="Email" m="1rem" type="email" />
          <Input placeholder="Name" m="1rem" />
          <Textarea placeholder="Message" m="1rem" />
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
            m="1rem"
          >
            Read more
          </Button>
        </div>
      </Div>
    </div>
  );
};

export default Contact;
