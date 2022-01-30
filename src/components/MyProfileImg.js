const MyProfileImg = () => {
    return (
        <div className="MyProfileImg">
            <img className="MyProfileImg__people" src={process.env.PUBLIC_URL + `/assets/profileImg.png`} />
            
            <div className="MyProfileImg__innerImg">
                 <img className="MyProfileImg__camera" src={process.env.PUBLIC_URL + `/assets/profileCamera.png`} />
            </div>
           
        </div>
    )
}
export default MyProfileImg;