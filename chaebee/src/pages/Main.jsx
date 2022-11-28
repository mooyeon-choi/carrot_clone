import { AiFillHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsFillChatDotsFill } from 'react-icons/bs';

import MainItemList from '../components/MainItemList';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';


function Main () {
  const navigate = useNavigate();
  const [pageState, setState] = useState(<MainItemList/>);
//   const user = useSelector((state) => state.user);

  return (
    <div className="Wrap">
      <div className="TMenuBar"> 
        <NavDropdown title="이천" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">분당</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">이천</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">청주</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="topView">
        {pageState}
      </div>
      <div className="bottomView">
        <div className="BMenuBar"> 
          <div className="BMenuBox" onClick={() => { navigate("/main") }}>
            <AiFillHome size="30px" color={"black"}/>
            <p style={{color: "black", fontSize: "12px"}}>홈</p></div>
          <div className="BMenuBox" onClick={() => { navigate("/main") }}>
            <BsFillChatDotsFill size="30px" color={"black"}/>
            <p style={{color: "black", fontSize: "12px"}}>채팅</p></div>
          <div className="BMenuBox" onClick={() => { navigate("/mypage") }}>
            <BiUser size="30px" color={"black"}/>
              <p style={{color: "black", fontSize: "12px"}}>내 정보</p> 
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Main;