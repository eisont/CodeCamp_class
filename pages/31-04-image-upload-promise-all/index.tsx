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
  const [files, setFiles] = useState<(File | undefined)[]>([
    // file 또는 undefined가 들어있는 배열이라고 알려주기
    undefined,
    undefined,
    undefined,
  ]);

  const [imageUrls, setImageUrls] = useState(["", "", ""]); // 이미지가 3개 들어가야 됩니다.

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  // (number) 파일이 몇번째 파일인지 알려주기
  const onChangeFile =
    (number: any) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        alert("파일이 없습니다.");
        return;
      }

      const fileReader = new FileReader();
      // file을 url로 만들기
      fileReader.readAsDataURL(file);
      // load가 되면 미리보기 보여주기
      fileReader.onload = (data) => {
        // result가 null이나 undefind 일 수도 있기 때문에 조건문
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls]; // ...스프레드 사용 안하면 복사가 되지 않습니다.
          tempUrls[number] = data.target?.result;

          setImageUrls(tempUrls);

          // 현재 파일만 바꿔줘야 합니다.

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
          // file이 변경되었을 때 state에 저장까지 했습니다.
        }
      };
    };

  const onClickSubmit = async () => {
    try {
      const results = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );
      // promise.all로 해서 보다 효율적이게 바꿨습니다.

      const resultUrls = results.map((el) =>
        el?.data ? el?.data.uploadFile.url : ""
      );
      // {return el?.data.uploadFile.url;}
      // url이 없는게 있을 수옫 있어요.

      // 근데 굉장히 더럽습니다. 언뜻 보기에 삼항연산자가 생각나요!!!
      // return el && uploadFile({ variables: { file: el} })
      // return el ? uploadFile({ variables: { file: el} }) : undefined

      // files.map((el)=> { // el === file
      //   // file이 있을수도 있고 undefined 일수 있습니다.
      //   if (el) { // el이 있으면 실행해줘
      //     return uploadFile({ variables: { file: el } });
      //   } else { // undefine이면 이거 실행해줘
      //     return undefined
      //   }
      // })

      // await uploadFile({ variables: { file: files[0] } });
      // await uploadFile({ variables: { file: files[1] } });
      // await uploadFile({ variables: { file: files[2] } });

      const result2 = await createBoard({
        variables: {
          createBoardInput: {
            writer: "영희",
            password: "1234",
            title: "안녕하세요~",
            contents: "이미지 업로드 입니다.",
            images: resultUrls,
          },
        },
      });
      console.log(result2.data?.createBoard._id);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* 몇 번째 파일이예요 (num) */}
      <input
        type="file"
        id="files0"
        style={{ display: "none" }}
        onChange={onChangeFile(0)}
      />
      <label htmlFor="files0">이미지 추가0</label>
      <input
        type="file"
        id="files1"
        style={{ display: "none" }}
        onChange={onChangeFile(1)}
      />
      <label htmlFor="files1">이미지 추가1</label>
      <input
        type="file"
        id="files2"
        style={{ display: "none" }}
        onChange={onChangeFile(2)}
      />
      <label htmlFor="files2">이미지 추가2</label>
      {/* js에서 만든 url */}
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
