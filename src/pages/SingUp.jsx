import React from "react";
import styled from "styled-components";

const SingUp = () => {
  const SingUpBackGround = styled.div`
    display: flex;
    background: #000;
    background-color: #03083e;
    opacity: 1;
    background-image: radial-gradient(#00ffd4 2px, transparent 2px),
      radial-gradient(#00ffd4 2px, #03083e 2px);
    background-size: 80px 80px;
    background-position: 0 0, 40px 40px;
    height: 100vh;
    justify-content: space-between;
    animation: animatedBackground 400s linear infinite;
    @keyframes animatedBackground {
      from {
        background-position: 40px 40px;
      }
      /*use negative width if you want it to flow right to left else and positive for left to right*/
      to {
        background-position: -10000px -10000px;
      }
    }
  `;
  const SingUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    height: 100vh;
    width: 60vw;
    max-width: 500px;
    min-width: 320px;
    @media (max-width: 800px) {
      width: 60vw;
    }
  `;
  const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 0 50px 0;
  `;
  const SingUpInput = styled.input`
    height: 30px;
    border-radius: 5px;
    margin: 5px 0px 10px 0px;
    outline: none;
    padding: 0px 5px;
    font-size: 15px;
    background: #03083e1d;
    border: none;
  `;
  const SingUpTitle = styled.h1`
    color: #03083e;
  `;
  const InputButton = styled.button`
    border: none;
    background: #03083e;
    color: white;
    padding: 8px 5px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
    }
  `;
  return (
    <SingUpBackGround>
      <SingUpDiv>
        <SingUpTitle>SingUp</SingUpTitle>
        <InputContainer>
          <label for="username">Username</label>
          <SingUpInput type="text" name="username" id="" required />
          <label for="email">Email</label>
          <SingUpInput type="email" name="email" id="" required />
          <label for="userpassword">Password</label>
          <SingUpInput type="password" name="userpassword" id="" required />
          <label for="confirmuserpassword">Confirm Password</label>
          <SingUpInput
            type="password"
            name="confirmuserpassword"
            id=""
            required
          />
          <InputButton>Sing Up</InputButton>
        </InputContainer>
        <p>
          By{" "}
          <a
            href="https://github.com/FacundoLG"
            rel="noreferrer"
            target="_blank"
          >
            Facundo Leonel Gimenez
          </a>
        </p>
      </SingUpDiv>
    </SingUpBackGround>
  );
};
export default SingUp;
