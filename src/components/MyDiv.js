const MyDiv = ({head, innerText}) => {
    return (
        <div className="MyDiv">
            <h4>{head}</h4>
            <div className="MyDiv__innerText">
                {innerText}
            </div>
        </div>
    )
}
export default MyDiv;