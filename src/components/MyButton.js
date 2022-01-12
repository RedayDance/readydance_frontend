const MyButton = ({text, onClick}) => {
   
    return (
        <div className="MyButton" >
            <button onClick={onClick}> {text} </button>
        </div>
    )
}
export default MyButton;