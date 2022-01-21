import { GiHamburgerMenu } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import {useContext, useEffect, useState } from "react";

import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import MyBanner from "../components/MyBanner";
import About from "../components/About";
import BannerList from "../components/BannerList";
import { LoginDispatchContext } from "../App";
import { LoginContext } from "../App";
const Home = () => {
  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const toggleLogin = useContext(LoginDispatchContext)
  const [isHamPushed, setIsHamPushed] = useState(false);

  useEffect(() => {
    console.log(login);
  }, []);


  const dancerooms = [
    {
      id: 1,
      rate: 4.5,
      name: "댄스 연습실 1",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 2,
      rate: 4.5,
      name: "댄스 연습실 2",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 3,
      rate: 4.5,
      name: "댄스 연습실 3",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 4,
      rate: 4.5,
      name: "댄스 연습실 4",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 5,
      rate: 4.5,
      name: "댄스 연습실 5",
      location: "서울특별시 강남구 논현로1길",
    },
  ];

  const academies = [
    {
      id: 1,
      rate: 4.5,
      name: "댄스 스튜디오1",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 2,
      rate: 4.0,
      name: "댄스 스튜디오2",
      location: "서울특별시 강남구 논현로2길",
    },
    {
      id: 3,
      rate: 3.5,
      name: "댄스 스튜디오3",
      location: "서울특별시 강남구 논현로3길",
    },
    {
      id: 4,
      rate: 3.0,
      name: "댄스 스튜디오4",
      location: "서울특별시 강남구 논현로4길",
    },
    {
      id: 5,
      rate: 3.5,
      name: "댄스 스튜디오5",
      location: "서울특별시 강남구 논현로5길",
    },
  ];

  const dancers = [
    {
      id: 1,
      rate: 4.5,
      name: "댄서1",
      location: "서울특별시 강남구 논현로1길",
    },
    {
      id: 2,
      rate: 4.0,
      name: "댄서2",
      location: "서울특별시 강남구 논현로2길",
    },
    {
      id: 3,
      rate: 3.5,
      name: "댄서3",
      location: "서울특별시 강남구 논현로3길",
    },
    {
      id: 4,
      rate: 3.0,
      name: "댄서4",
      location: "서울특별시 강남구 논현로4길",
    },
    {
      id: 5,
      rate: 3.5,
      name: "댄서",
      location: "서울특별시 강남구 논현로5길",
    },
  ];

  return (
    <div className="Home">
      <MyHeader
        
        rightChild={
          login ? (
            <GiHamburgerMenu
              onClick={() => {
                setIsHamPushed(!isHamPushed);
              }}
            />
          ) : (
            <></>
          )
        }
      />
      {login && isHamPushed ? (
        <div className="Home__innerHamburger">
          <div
            className="Home__innerhamburger__item"
            onClick={() => {
              alert("마이페이지 이동");
            }}
          >
            {" "}
            마이 페이지{" "}
          </div>
          <div className="divider"> </div>
          <div
            className="Home__innerhamburger__item"
            onClick={() => {
              toggleLogin(login);
            }}
          >
            로그아웃
          </div>
        </div>
      ) : (
        <></>
      )}

      <MyBanner />
      <BannerList
        text={"지금! 뜨고 있는 댄스 학원"}
        list={academies}
      />
      <BannerList
        text={"요즘 인기 있는 연습실"}
        list={dancerooms}
      />
      <BannerList
        text={"지금 HOT한 댄서는 누구?"}
        list={dancers}
      />
      <h4>ReadyDance에서 댄스에 대한 모든 것을 알아보세요!</h4>
      <section className="Home__about">
        <About headText="레디댄스란 무엇인가요?" />
        <About headText="레디댄스란 무엇인가요?" />
        <About headText="저에게 맞는 댄스 장르를 찾고 싶어요" />
      </section>
      <MyFooter />
    </div>
  );
};
export default Home;
