import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

// graphql 담는 부분

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

// 04-05-graphql-mutation-input 리펙토링

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    contents: '',
  });

  const [data, setData] = useState('');
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { ...inputs },
    });
    setData(result.data.createBoard.createBoardInput.AcreatedAt);
  };

  // ========================================================

  // const onChangeWriter = (event: any) => {
  //   setInputs({
  //     writer: inputs.writer,
  //     title: inputs.title,
  //     contents: inputs.contents,
  //     writer: event.target.value,
  //   });
  // };
  // const onChangeTitle = (event: any) => {
  //   setInputs({
  //     writer: inputs.writer,
  //     title: inputs.title,
  //     contents: inputs.contents,
  //     title: event.target.value,
  //   });
  // };
  // const onChangeContents = (event: any) => {
  //   setInputs({
  //     writer: inputs.writer,
  //     title: inputs.title,
  //     contents: inputs.contents,
  //     contents: event.target.value,
  //   });
  // };

  // ========================================================

  // const onChangeWriter = (event: any) => {
  //   setInputs({
  //     ...inputs,
  //     writer: event.target.value,
  //   });
  // };
  // const onChangeTitle = (event: any) => {
  //   setInputs({
  //     ...inputs,
  //     title: event.target.value,
  //   });
  // };
  // const onChangeContents = (event: any) => {
  //   setInputs({ ...inputs, contents: event.target.value });
  // };

  // ========================================================

  const onChangeInputs = (event: any) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  // event.target.id를 바로 key로 사용할 수 없습니다. event{target{id}} 이기 때문에
  // [] (대괄호)로 감싸줘야 합니다.

  return (
    <>
      <div>{data}</div>
      작성자: <input type='text' id='writer' onChange={onChangeInputs} />
      <br />
      제목: <input type='text' id='title' onChange={onChangeInputs} />
      <br />
      내용: <input type='text' id='contents' onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
