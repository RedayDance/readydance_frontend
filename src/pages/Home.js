import { GiHamburgerMenu } from "react-icons/gi";
import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import MyBanner from "../components/MyBanner";
import BannerList from "../components/BannerList";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(login);
  }, [login]);
  const toggleLogin = () => {
    setLogin(!login);
  };

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
  return (
    <div className="Home">
      <MyHeader
        leftChild={
          <DiGithub
            onClick={() => {
              navigate("/");
            }}
          />
        }
        loginInfo={
          login ? (
            <MyButton text={"로그아웃"} onClick={toggleLogin} />
          ) : (
            <MyButton
              text={"로그인/회원가입"}
              onClick={() => navigate("/signin")}
            />
          )
        }
        rightChild={
          <GiHamburgerMenu
            onClick={() => {
              navigate("/signin");
            }}
          />
        }
      />
      <MyBanner />
      <h4 className="Home__academies">지금! 뜨고 있는 댄스학원</h4>
      <BannerList list={academies} />

      <h4 className="Home__dancerooms">댄서들이 가장 많이 찾는 연습실</h4>
      <BannerList list={dancerooms} />
    </div>
  );
};
export default Home;
