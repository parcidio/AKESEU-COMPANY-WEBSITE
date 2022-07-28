import React from "react";
import { Div, Col, Image, Anchor, Tag } from "atomize";
import logo from "../../assets/logo.png";
import "./containers.css";

const Nav = () => {
  return (
    <Div
      justify="space-between"
      d="flex"
      h="4rem"
      align="center"
      shadow="0 10px 24px -10px rgba(0, 0, 0, 0.08)"
    >
      <Col size={{ xs: 4, lg: 2 }}>
        <Div>
          <Image w={{ xs: "8rem", md: "8rem" }} src={logo} />
        </Div>
      </Col>
      <Col size={{ xs: 8, lg: 6 }}>
        <Div d="flex" justify="end">
          {["About", "Team", "Services", "Contact", "Career"].map(
            (menuItem) => (
              <Div p="1rem">
                <Anchor href={`#${menuItem}`}>
                  <Tag hoverBg="info200" cursor="pointer">
                    {menuItem}
                  </Tag>
                </Anchor>
              </Div>
            )
          )}
        </Div>
      </Col>
    </Div>
  );
};

export default Nav;
