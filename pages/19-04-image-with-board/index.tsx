import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// graphql 담는 부분

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setMyWriter] = useState("");
  const [password, setMyPassword] = useState("");
  const [title, setMyTitle] = useState("");
  const [contents, setMyContents] = useState("");

  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [data, setData] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
    // console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: any) => {
    setMyWriter(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setMyPassword(event.target.value);
  };
  const onChangeTitle = (event: any) => {
    setMyTitle(event.target.value);
  };
  const onChangeContents = (event: any) => {
    setMyContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files && event?.target.files[0] // 값이 있다면 file[0]을 보여줘
    const file = event.target.files?.[0]; // 값이 있다면 file[0]을 보여줘
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      // uploadFile({ variables: { file } });
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      // console.log(result);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div>{data}</div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "skyblue",
          fontSize: "0",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
