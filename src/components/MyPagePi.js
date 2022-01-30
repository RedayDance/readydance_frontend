import MyButton from "./MyButton";

const MyPagePi = () =>{
    return(
        <div className="MyPagePi">
            <div className="MyPagePi__innerDiv">
                <div>아이디</div>
                <div className="MyPagePi__innerDiv__userInput">asdf@naver.com</div>
            </div>

            <div className="MyPagePi__innerDiv">
                <div>닉네임</div>
                <div className="MyPagePi__innerDiv__userInput">hyevvy</div>
            </div>

            <div className="MyPagePi__innerDiv">
                <div>휴대폰 번호</div>
                <div className="MyPagePi__innerDiv__userInput">010-1234-5678</div>
            </div>

            <div className="MyBtn"> 
            <MyButton  text="저장 완료" onClick={()=>{alert("정보를 수정합니다")}} />
            </div>
          
        </div>
    )
}
export default MyPagePi;