import {BiPaste} from "react-icons/bi";
const MyMap = ({head, address, coordinate}) =>{
    return(
        <div className="MyMap">
            <h4>{head}</h4>
            <div className="MyMap__addressBoard" onClick={()=>{alert("복사!")}}>
                <h6>{address}</h6>
                <div className="MyMap__icon">
                   <BiPaste/> </div>
            </div>
            
        </div>
    )
}
export default MyMap;