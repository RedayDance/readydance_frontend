
import MyButton from "./MyButton";
const MyPagePassword = () =>{
      
    return(
        <div className="MyPagePassword">
            <div className="MyPagePassword__innerDiv">
                <div>현재 비밀번호</div>
                <input placeholder="현재 비밀번호"/>
               
                
            </div>

            <div className="MyPagePassword__forgetDiv">
                <h6>비밀번호를 잊으셨나요?</h6>
                <div className="MyBtn">
                    <MyButton text={"비밀번호 재설정"} />
                </div>
                
            </div>
            
            <div className="MyPagePassword__innerDiv">
                <div>비밀번호</div>
                <input  placeholder="새로운 비밀번호"/>
            </div>
            
            <div className="MyPagePassword__innerDiv">
                <div>비밀번호 확인</div>
                <input  placeholder="새로운 비밀번호 확인"/>
            </div>

            <div className="MyBtn">
                <MyButton text={"비밀번호 변경하기"}/>
            </div>
           
        </div>
    )
}
export default MyPagePassword;