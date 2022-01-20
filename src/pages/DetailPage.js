import MyHeader from '../components/MyHeader';
import MyFooter from '../components/MyFooter';
import MyButton from '../components/MyButton';
import MyDiv from '../components/MyDiv';
import MyMap from '../components/MyMap';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";
import { DiGithub } from "react-icons/di";

const data = {

    precautions: "1. 예약 일시와 사용 인원은 문자나, 통화할 때 정확하게 알려 주셔야 합니다. \n 2. 음식물 반입금지입니다. \n 3. 일반 쓰레기는 대기실 쓰레기통에 넣어주시고 재활용\n 쓰레기는 입구 오른쪽 분리수거함에 넣어주세요.\n 4. 공간 내 음주 및 흡연은 절대 불가합니다.\n 5. 입실 시 실외화는 현관 밖 신발장에 정리해주시고 실내화를 착용해 주십시오."
}

const DetailPage = () => {

    const navigate = useNavigate();
    const [isHamPushed, setIsHamPushed] = useState(false);

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
        loginInfo={
            <MyButton text={"로그아웃"} onClick={()=>{"로그아웃처리"}} />
        }
        rightChild={
            <GiHamburgerMenu
              onClick={() => {
                setIsHamPushed(!isHamPushed);
              }}
            />} />
            <div className="DetailPage">
              <div className="DetailPage__header">
                  <img width="130px" src={process.env.PUBLIC_URL + `/assets/danceacademy_logo.png`}/>
                  <div className="DetailPage__header__info">
                      <div className='DetailPage__header__name'>
                          <h4>강남 댄스 스튜디오</h4> 
                          <AiOutlineStar />
                          <AiFillStar />
                      </div>
                    <h6>⭐️ 4.91</h6>
                    <h6>주소 | 서울특별시 강남구 논현로</h6>
                    <h6>홈페이지 | https://www.naver.com</h6>
                  </div>
              </div>
              <MyDiv head={"소개"} innerText={"1. 스우파 커버 이벤트!"} />
              
              <MyDiv head={"시설 안내"} innerText={"1. 넓은 대기실, 전신 거울, 냉온정수기가 있습니다"} />
              
              <MyDiv head={"가격 안내"} innerText={"1. 단체반 레슨 1개월 180,000"} />
              
              <MyDiv head={"주의 사항"} innerText={data.precautions} />

              <MyMap head={"위치 안내"} address={"서울 송파구 올림픽로 300"} />
              
          
        </div>
        <MyFooter />
        </>
    )
}
export default DetailPage;