import React from "react";
import styled from "styled-components";
const HomeContainer = styled.div`
  display: grid;
  margin-left: 20vw;
  grid-template: repeat(5, 12vw) / repeat(5, 15vw);
  grid-template-areas: "header header header header header";
  align-items: center;
  justify-items: center;
  max-height: 96vh;
  background: #dddddd;
  border-radius: 10px;
  gap: 5px 5px;
`;
const HomeTop = styled.div`
  grid-area: header;
`;
const Home = () => {
  return (
    <HomeContainer>
      <HomeTop>Hi how are you </HomeTop>
    </HomeContainer>
  );
};

export default Home;
