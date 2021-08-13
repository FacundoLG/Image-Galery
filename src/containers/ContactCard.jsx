import React from "react";
import styled from "styled-components";

const StyledcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 5px;
  color: white;
  font-weight: 300;
  > .Nombre {
    background: #0a1931;
    margin: 0px;
    padding: 5px;
    border-radius: 5px 5px 0 0;
  }
  > .ContactData {
    display: flex;
    padding: 5px;
    align-items: center;
    background: #47597e;
    border-radius: 0 0 5px 5px;
    > .imageContainer img {
      background: #000;
      width: 50px;
      height: 50px;
    }
    > .contactData {
      > p {
        margin: 4px;
      }
    }
  }
`;
const ContactCard = (props) => {
  const { name, email, phoneNum } = props;
  return (
    <StyledcardContainer>
      <p className="Nombre">{name}</p>
      <div className="ContactData">
        <div className="imageContainer">
          <img src="" alt="" />
        </div>
        <div className="contactData">
          <p className="email">{email}</p>
          <p className="Phone">{phoneNum}</p>
        </div>
      </div>
    </StyledcardContainer>
  );
};

export default ContactCard;
