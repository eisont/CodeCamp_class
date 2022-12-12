// gql 임포트할때 apollo/client에서 했는지 graphql-request에서 임포트 했는지 확인해보세요. 둘 기능이 달라 오류 될 수 있습니다.
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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

export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState<File>();

  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  // createBoard === 리턴 값, IMutationCreateBoardArgs === 우리가 작성하는 name, writer 등등의 타입
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // file이 숫자였다. blob 형태로 만들어줍니다.?, 데이터베이스에 저장 가능한데 엄청난 data로 올라가기 때문에 직접 올리진 않고 미리보기 용도로만 사용하고 버릴겁니다.
    // file이 없다면
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    // 이미 내장되어있는 기능입니다.
    // file을 읽어서
    const fileReader = new FileReader();
    // file을 url 형식으로 읽겠습니다.
    // 큰 데이터를 읽습니다.
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // 다 읽은 데이터가 들어옵니다.

      if (typeof data.target?.result === "string") {
        // 그 data 안에는 콘솔로 확인 가능
        console.log(data.target?.result); // 값이 없을 수도 있을때는 옵셔널 체이닝 사용해서 없을 경우도 알려줍니다.
        // 이거 자체가 이미지 주소입니다.
        setImageUrl(data.target?.result); // 이미 string올 추론이 되었습니다. undefined일수도 있어요. 그렇기에 if문 추가
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    // uploadFile
    // createBoard 함수를 한번에 묶겠습니다.
    const result1 = await uploadFile({ variables: { file: file1 } });
    // 우리가 uploadFile 타입을 지정을 해서 undefined일 수도 있다. 라는 의미라 옵셔널 네이밍을 사용해서 없는 경우의 수도 지정해줍니다.
    const imageUrl = result1.data?.uploadFile.url;
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요~",
          contents: "이미지 업로드 입니다.",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      {/* js에서 보여주는 미리보기, 찌꺼기가 남지 않는다. */}
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
