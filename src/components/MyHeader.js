//회원가입여부에 따라 Header 바뀌는 걸 MyHeader에서 구현할 것
const MyHeader = ({ leftChild, searchBar, loginInfo, rightChild }) => {
  return (
    <header className="MyHeader">
      <div className="MyHeader__left">{leftChild}</div>

      <div className="MyHeader__searchBar">{searchBar}</div>
      <div className="MyHeader__right">
        <div className="MyHeader__loginInfo">{loginInfo}</div>
        <div className="MyHeader__rightChild">{rightChild}</div>
      </div>
    </header>
  );
};
export default MyHeader;
