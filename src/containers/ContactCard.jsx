import React from "react";
import styled from "styled-components";

const StyledcardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  margin: 2px;
  width: 40%;
  height: 100px;
  background: #696969;
  > .contactData {
    > p {
      margin: 0;
    }
  }
`;
const ContactCard = () => {
  return (
    <StyledcardContainer>
      <div className="imageContainer">
        <img src="" alt="" />
      </div>
      <div className="contactData">
        <p className="Nombre">Nombre</p>
        <p className="email">email</p>
        <p className="Phone">Phone</p>
      </div>
    </StyledcardContainer>
  );
};

export default ContactCard;
