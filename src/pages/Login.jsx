import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser, setError } from "../redux/actions/index";
import styled from "styled-components";

const LoginBackGround = styled.div`
  display: flex;
  opacity: 1;
  justify-content: space-between;
  height: 100vh;
`;
const LoginDiv = styled.div`
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
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 0 50px 0;
  > .error {
    color: red;
    text-align: center;
    margin: 2px;
    font-size: 14px;
  }
`;
const LoginInput = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 5px 0px 10px 0px;
  outline: none;
  padding: 0px 5px;
  font-size: 15px;
  background: #03083e1d;
  border: none;
`;
const LoginTitle = styled.h1`
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

const Login = (props) => {
  const { errorMessage } = props;
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const Login = () => {
    const loginBody = {
      username: userName,
      password: userPassword,
    };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginBody),
    })
      .then((res) => res.json())
      .then((data) => {
        props.setUser(data.result);
        props.setError(data.errorMessage);
      });
  };

  return (
    <LoginBackGround>
      <LoginDiv>
        <LoginTitle>Login</LoginTitle>
        <InputContainer>
          <label for="username">Username</label>
          <LoginInput
            type="text"
            name="username"
            id="loginusername"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label for="userpassword">Password</label>
          <LoginInput
            type="password"
            name="userpassword"
            id="loginpassword"
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
          />
          <InputButton onClick={Login}>Sing Up</InputButton>
          <p className="error">{errorMessage}</p>
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
      </LoginDiv>
    </LoginBackGround>
  );
};
const MapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};
const MapDispathcToProps = {
  setUser,
  setError,
};
export default connect(MapStateToProps, MapDispathcToProps)(Login);
