const MyButton = ({ text, onClick, style}) => {
  return (
   
    <button className="MyButton" onClick={onClick}
    style={style}
    >
      {text}
    </button>
  );
};
export default MyButton;
