import React from "react";
import { Div, Anchor } from "atomize";
import "./containers.css";

const Footer = () => {
  return (
    <Div d="flex" justify="center" align="center" bg="#063159" h="4rem">
      {[
        "Blog",
        "Google Maps",
        "LinkedIn",
        "Facebook",
        "Career",
        "Intagram",
        "Whatsapp",
        "News Letter",
      ].map((menuItem) => (
        <Div p="1rem">
          <Anchor
            href={`#${menuItem}`}
            cursor="pointer"
            textSize="caption"
            textWeight="400"
            textColor="#FFFFFF"
          >
            {menuItem}
          </Anchor>
        </Div>
      ))}
    </Div>
  );
};

export default Footer;
