import { useRef, useState } from "react";
const MyProfileImg = () => {

    const [fileUrl, setFileUrl] = useState("");
    const logoImgInput = useRef();
    const onImgChange = (e) =>{ 
        e.preventDefault();

        const reader = new FileReader(); 
        const imageFile = e.target.files[0];
        alert("HI");
        //TODO: 사용자가 올린 사진 미리보기 제공
       
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)

        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        
        //TODO: 서버에 사진 올리기 (API요청했음!)
        e.preventDefault();
        logoImgInput.current.click();
    }
    
 

    const onImgBtnClick = (e)=>{
        e.preventDefault();
        logoImgInput.current.click();
    }
    return (
        <>
        
        <div className="MyProfileImg" onClick={onImgBtnClick}  >
            <img className="MyProfileImg__people"  src={process.env.PUBLIC_URL + `/assets/profileImg.png`} />
            <div className="MyProfileImg__innerImg">
                 <img className="MyProfileImg__camera" src={process.env.PUBLIC_URL + `/assets/profileCamera.png`}  onClick={onImgChange}/>
            </div>
           
        </div>
         <input type="file" multiple accept="image/*"  style={{display:"none"}} ref={logoImgInput}  onChange={onImgChange}/>
         </>
    )
}
export default MyProfileImg;