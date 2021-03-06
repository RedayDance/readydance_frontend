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
import { Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const banner_acadmy = [
  { id: 1, url: `assets/tobby_dance.png` },
  { id: 2, url: `assets/hyevvy_dance.png` },
];

const Home = () => {
  const getMainInfoAcademy = () => {
    GET("/api/main/GetMainInfo/Academy").then((res) => {
       console.log(res);
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.id,
        name: rowData.postName,
        picture_url: rowData.postPicture,
        rate: rowData.postRate,
        location: rowData.postLocation,
        type:rowData.postType
      }));
      setAcademies(academies.concat(_inputData));
    });
  };

  const getMainInfoDanceRooms = () => {
    GET("/api/main/GetMainInfo/PracticeRoom").then((res) => {
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.id,
        name: rowData.postName,
        picture_url: rowData.postPicture,
        rate: rowData.postRate,
        location: rowData.postLocation,
        type:rowData.postType
      }));
      setDanceRooms(dancerooms.concat(_inputData));
    });
  };

  const getMainInfoDancers = () => {
    GET("/api/main/GetMainInfo/Dancer").then((res) => {
      const _inputData = res.data.data.map((rowData) => ({
        id: rowData.id,
        name: rowData.postName,
        picture_url: rowData.postPicture,
        rate: rowData.postRate,
        location: rowData.postLocation,
        type:rowData.postType
      }));
      setDancers(dancers.concat(_inputData));
    });
  };

  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const { r_logout } = useContext(LoginDispatchContext);
  const [isHamPushed, setIsHamPushed] = useState(false);

  const [academies, setAcademies] = useState([]);
  const [dancerooms, setDanceRooms] = useState([]);
  const [dancers, setDancers] = useState([]);

  useEffect(() => {
    getMainInfoAcademy();
    getMainInfoDanceRooms();
    getMainInfoDancers();

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
              navigate("/mypage");
            }}
          >
            {" "}
            ?????? ?????????{" "}
          </div>
          <div className="divider"> </div>
          <div
            className="Home__innerhamburger__item"
            onClick={() => {
              r_logout(login);
            }}
          >
            ????????????
          </div>
        </div>
      ) : (
        <></>
      )}
{/* 
      <div className="Home__searchBar">
        <Search
          placeholder="??????, ????????? ???, ??????, ?????? ??????"
          onSearch={onSearch}
          allowClear
          style={{ width: 500 }}
          size="large"
        />
      </div> */}
      {/* <MyBanner /> */}
      <BannerList
        text={"??????! ?????? ?????? ?????? ??????"}
        type={"AC"}
        list={academies}
      />
      <BannerList
        text={"?????? ?????? ?????? ?????????"}
        type={"PR"}
        list={dancerooms}
      />

      <MyBanner items={banner_acadmy} />
      <BannerList text={"?????? HOT??? ????????? ???????"} type={"DA"} list={dancers} />
      <h4>ReadyDance?????? ????????? ?????? ?????? ?????? ???????????????!</h4>
      <section className="Home__about">
        <About headText="??????????????? ????????????????" />
        <About headText="??????????????? ????????????????" />
        <About headText="????????? ?????? ?????? ????????? ?????? ?????????" />
      </section>
      <MyFooter />
    </div>
  );
};
export default Home;
