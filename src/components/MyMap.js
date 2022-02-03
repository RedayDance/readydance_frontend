import { BiPaste } from "react-icons/bi";
import ClipboardCopy from "../shared/CopyFunc";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MyMap = ({ head, address, coordinate }) => {
  //TODO: 서버에서 받아온 주소와 이름을 같이 넘길 것(API 수정 요청했음)
  return (
    <div className="MyMap">
      <h4>{head}</h4>
      <div
        className="MyMap__addressBoard"
        onClick={() => ClipboardCopy(address)}
      >
        <h6>{address}</h6>
        <div className="MyMap__icon">
          <BiPaste />{" "}
        </div>
      </div>

      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div className="MyMap__MapMarker">{address}</div>
        </MapMarker>
      </Map>
    </div>
  );
};
export default MyMap;
