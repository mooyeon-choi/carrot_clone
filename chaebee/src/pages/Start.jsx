import styled from "styled-components";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


function Start () {
  return (
    <Box>
      <Intro>
        <h1><img src={logo} alt="당근마켓 로고" /></h1>
        <h2>SK 중고거래 채비</h2>
        <p>지금 시작해보세요!</p>
      </Intro>
      <Select>
        <WrapBottom>
          <button><Link to="/Main">시작하기</Link></button>
          <p>이미 계정이 있나요? <span><Link to="/login">로그인</Link></span></p>
        </WrapBottom>
      </Select>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    justify-content: center;
    img {
      width: 40%;
    }
  }

  h2 {
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    text-align: center;
    margin-top: 20px;
  }
`

const Select = styled.div`
  position: relative;
`;

const WrapBottom = styled.div`
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "LINESeedKR-Rg";

  button {
    width: 85%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: orange;
    font-weight: bold;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
      background-color: orange;
      transition: background .3s;
      text-decoration: none;

      &:hover {
        background-color: orange;
      }
    }
  }

  p {
    margin-top: 30px;
    span {
      color: orange;
    }
  }
`;

export default Start;