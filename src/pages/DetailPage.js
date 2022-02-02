import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import MyButton from "../components/MyButton";
import MyDiv from "../components/MyDiv";
import MyMap from "../components/MyMap";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";
import { DiGithub } from "react-icons/di";
import { GET } from "../shared/Request";

const DetailPage = () => {
  const navigate = useNavigate();
  const [isHamPushed, setIsHamPushed] = useState(false);
  const { id } = useParams();

  const [cau, setCau] = useState("");
  const [info, setInfo] = useState("");
  const [int, setInt] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  console.log(id);
  useEffect(() => {
    GET(`/api/main/SearchDetailed?FAD_NO=${id}`).then((res) => {
      const ans = res.data.data[0];
      setCau(ans.FAD_CAU);
      setInfo(ans.FAD_INFO);
      setInt(ans.FAD_INT);
      setPrice(ans.FAD_PRICE);
      setUrl(ans.FAD_URL);
    });
  }, []);

  return (
    <>
      <MyHeader
        leftChild={
          <DiGithub
            onClick={() => {
              navigate("/");
            }}
          />
        }
        rightChild={
          <GiHamburgerMenu
            onClick={() => {
              setIsHamPushed(!isHamPushed);
            }}
          />
        }
      />
      <div className="DetailPage">
        <div className="DetailPage__header">
          <img
            width="130px"
            src={process.env.PUBLIC_URL + `/assets/danceacademy_logo.png`}
          />
          <div className="DetailPage__header__info">
            <div className="DetailPage__header__name">
              <h4>강남 댄스 스튜디오</h4>
              <AiOutlineStar />
              <AiFillStar />
            </div>
            <h6>⭐️ 4.91</h6>
            <h6>주소 | 서울특별시 강남구 논현로</h6>
            <h6>홈페이지 | {url}</h6>
          </div>
        </div>
        <MyDiv head={"소개"} innerText={int} />

        <MyDiv head={"시설 안내"} innerText={info} />

        <MyDiv head={"가격 안내"} innerText={price} />

        <MyDiv head={"주의 사항"} innerText={cau} />

        <MyMap head={"위치 안내"} address={"서울 송파구 올림픽로 300"} />
      </div>
      <MyFooter />
    </>
  );
};
export default DetailPage;
