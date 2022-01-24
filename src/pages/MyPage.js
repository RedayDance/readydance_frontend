import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import MyPagePassword from "../components/MyPagePassword";
import MyPagePi from "../components/MyPagePi";
import MyPageSaveList from "../components/MyPageSaveList";
const MyPage = () => {
  const [clickedUl, setClickedUl] = useState(0);
  
  useEffect(()=>{
    console.log(clickedUl);
  },[clickedUl])

  const renderSwitch=(param)=>{
    switch(param){
      case 1:
        return (<MyPagePi />)
      case 2 :
        return (<MyPagePassword />)
      case 3 :
        return (<MyPageSaveList />)
      default :
        return <></>
    }
  }

  return (
    <>
      <MyHeader />
        <div className="MyPage">
          <div className="MyPage__header">마이페이지</div>
         <div className="MyPage__innerSection">
         <ul>
           <li onClick={()=>setClickedUl(1)}>개인 정보</li>
           <li onClick={()=>setClickedUl(2)}>비밀 번호 변경</li>
           <li onClick={()=>setClickedUl(3)}>저장 목록</li>
         </ul>
          <div className="MyPage__contentSection">
            {renderSwitch(clickedUl)}
          </div>
          </div>
        </div>
      <MyFooter />
    </>
  );
};
export default MyPage;
