import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// graphql 담는 부분

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [mywriter, setMyWriter] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");
  const [data, setData] = useState("");

  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")  // rest-api 방식

    // mutation 부분
    const result = await callApi({
      variables: { writer: mywriter, title: mytitle, contents: mycontents },
      // 위 데이터에 전송해서 출력하겠습니다.
    }); // graphql-api 방식
    // console.log(result)
    // console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <>
      <div>{data}</div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
