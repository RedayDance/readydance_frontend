import { GiHamburgerMenu } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import MyBanner from "../components/MyBanner";
import About from "../components/About";
import BannerList from "../components/BannerList";
import { LoginDispatchContext } from "../App";
import { LoginContext } from "../App";
import { GET } from "../shared/Request";

const banner_acadmy = [
  { id: 1, url: `assets/tobby_dance.png` },
  { id: 2, url: `assets/hyevvy_dance.png` },
];

const Home = () => {
  const getMainInfoAcademy = () => {
    GET("/api/main/GetMainInfo/Academy", {
    }).then((res)=>{
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.POST_NO,
        name: rowData.POST_NAME,
        picture_url: rowData.POST_PICTURE,
        rate: rowData.POST_RATE,
        location: rowData.POST_LOCATION,
      }));
      setAcademies(academies.concat(_inputData));
    });
  };

  const getMainInfoDanceRooms = () => {
    GET("/api/main/GetMainInfo/PracticeRoom").then((res)=>{
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.POST_NO,
        name: rowData.POST_NAME,
        picture_url: rowData.POST_PICTURE,
        rate: rowData.POST_RATE,
        location: rowData.POST_LOCATION,
      }));
      setDanceRooms(dancerooms.concat(_inputData));
    })
  };

  const getMainInfoDancers = () => {
    GET("/api/main/GetMainInfo/Dancer").then((res)=>{
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.POST_NO,
        name: rowData.POST_NAME,
        picture_url: rowData.POST_PICTURE,
        rate: rowData.POST_RATE,
        genre: rowData.POST_JANRE,
      }));
      setDancers(dancers.concat(_inputData));
    })
    
  };

  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const r_logout = useContext(LoginDispatchContext);
  const [isHamPushed, setIsHamPushed] = useState(false);

  const [academies, setAcademies] = useState([]);
  const [dancerooms, setDanceRooms] = useState([]);
  const [dancers, setDancers] = useState([]);

  useEffect(() => {
    getMainInfoAcademy();
    getMainInfoDanceRooms();
    getMainInfoDancers();
    console.log(login);
  }, [login]);

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
              navigate("/mypage/3");
            }}
          >
            {" "}
            마이 페이지{" "}
          </div>
          <div className="divider"> </div>
          <div
            className="Home__innerhamburger__item"
            onClick={() => {
              r_logout(login);
            }}
          >
            로그아웃
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* <MyBanner /> */}
      <BannerList text={"지금! 뜨고 있는 댄스 학원"} list={academies} />
      <BannerList text={"요즘 인기 있는 연습실"} list={dancerooms} />

      <MyBanner items={banner_acadmy} />
      <BannerList text={"지금 HOT한 댄서는 누구?"} list={dancers} />
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
