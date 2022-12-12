import { AppleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(AppleOutlined)`
  font-size: 50px;
  color: lightgray;
  background: #000;

  // 아이콘의 크기 === font-size
  // 색상 === color
`;

export default function LibraryIconPage() {
  // return <AppleOutlined />;
  return <MyIcon />;
}
