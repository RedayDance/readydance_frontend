import { Input, Space } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const MySearchBar = () => {
  return (
    <Space>
      <Search
        placeholder="지역, 지하철 역, 시설, 댄서 검색"
        onSearch={onSearch}
        allowClear
        style={{ width: 500 }}
        size="large"
      />
    </Space>
  );
};

export default MySearchBar;
