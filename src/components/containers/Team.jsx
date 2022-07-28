import React from "react";
import { Div, Row, Text } from "atomize";
import "./containers.css";
import { TeamCard } from "../Components";
import TeamData from "../../data/TeamMembers";

const Team = () => {
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
            Our Team
          </Text>
          <Row w="100%" d="flex">
            {TeamData.map((teamMember) => (
              <TeamCard
                name={teamMember.name}
                title={teamMember.tittle}
                quote={teamMember.quote}
              />
            ))}
          </Row>
        </Div>
      </Div>
    </div>
  );
};

export default Team;
