import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ContactCard from "../containers/ContactCard";
const HomeContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template: 40px repeat(4, 19vh) / repeat(5, 17vw);
  grid-template-areas:
    "header header header header header"
    "cardContainer cardContainer cardContainer cardContainer cardContainer"
    "cardContainer cardContainer cardContainer cardContainer cardContainer"
    "cardContainer cardContainer cardContainer cardContainer cardContainer"
    "cardContainer cardContainer cardContainer cardContainer cardContainer";
  background: #dddddd;
  border-radius: 10px;
  gap: 5px 5px;
`;
const HomeTop = styled.div`
  grid-area: header;
  background: #629dfb;
  border-radius: 10px 10px 0 0;
  padding: 10px;
`;
const CardContainer = styled.div`
  grid-area: cardContainer;
`;

const Home = (props) => {
  const { UserData } = props;
  console.log(UserData);
  return (
    <HomeContainer>
      <HomeTop>Hi how are you {UserData.name} </HomeTop>
      <CardContainer>
        <ContactCard />
      </CardContainer>
    </HomeContainer>
  );
};
const MapStateToProsp = (state) => {
  return {
    UserData: state.User[0],
  };
};
export default connect(MapStateToProsp, null)(Home);
