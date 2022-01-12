const { default: MySwiperList } = require("./MySwiperList");

const DanceAcademies = ({ list }) => {
  return (
    <div className="DanceAcademies">
      <MySwiperList list={list} />
    </div>
  );
};
export default DanceAcademies;
