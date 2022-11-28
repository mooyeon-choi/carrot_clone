import "../public/css/listForm.css";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMainposts } from "../redux/modules/post";


function MainItemList() {
  const [boardList, setBoardList] = useState();

  const mainPostList = [{
    userLocation: '분당', 
    postId: '1', 
    tradeState: '0',
    postImg: '/images/post1.jpg',
    title: '낚시용품',
    price: '30000',
    likeNum: '2',
  },{
    userLocation: '이천', 
    postId: '2', 
    tradeState: '1',
    postImg: '/images/post2.jpg',
    title: '전자랜지',
    price: '5000',
    likeNum: '0',
  },{
    userLocation: '분당', 
    postId: '3', 
    tradeState: '2',
    postImg: '/images/post3.jpg',
    title: '전기자전거 판매해요',
    price: '60000',
    likeNum: '9',
  }]
  // const mainPostList = useSelector((state) => state.post.postList);
  // const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  return (
    <div className="MainListBox">
      {mainPostList &&
        mainPostList.map((list, index) => (
          <div key={index}>
              <CardBox>
                <div
                  style={{ display: "flex" }}
                  onClick={() => {
                    navigate("/detail/" + list.postId+"/"+list.tradeState);
                  }}
                >
                  <Img src={list.postImg} />
                  <TextArea>
                    <span
                      style={{
                        fontSize: "11px",
                        padding: "0 5px",

                        width: "200px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {list.title}
                    </span>
                    <span
                      style={{
                        fontSize: "9px",
                        padding: "5px",
                        color: "#AAAAAA",
                      }}
                    >
                      {list.userLocation}
                    </span>
                    <TradeState>
                      <span>
                        {list.tradeState === "1" ? (
                          <Book>예약중</Book>
                        ) : list.tradeState === "2" ? (
                          <SoldOut>거래완료</SoldOut>
                        ) : (
                          ""
                        )}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          padding: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        {Number(list.price).toLocaleString("ko-KR")}원
                      </span>
                    </TradeState>
                  </TextArea>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "30px",
                    fontSize: "14px",
                  }}
                >
                  <BsHeart size="15" />
                  {list.likeNum}
                </div>
              </CardBox>
          </div>
        ))}

      <FixedButton>
        <FaPlus
          onClick={() => {
            navigate("/add");
          }}
          style={{
            marginRight: '2px'
          }}
        />
        글쓰기
      </FixedButton>
    </div>
  );
}

const CardBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  margin: 0 5px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 10px;
`;

const FixedButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 80px;
  height: 35px;
  font-size: 12px;
  background-color: orange;
  color: white;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 0 #999;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
`;

const TradeState = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const SoldOut = styled.div`
  padding: 5px 4px;
  width: 65px;
  border-radius: 5px;
  background-color: #565656;
  color: white;
  font-size: 9px;
  text-align: center;
`;

const Book = styled(SoldOut)`
  width: 55px;
  background-color: #34bf9e;
`;

export default MainItemList;
