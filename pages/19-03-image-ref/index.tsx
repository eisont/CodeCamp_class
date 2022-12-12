import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  console.log("gkgkgk")

  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files && event?.target.files[0] // 값이 있다면 file[0]을 보여줘
    const file = event.target.files?.[0]; // 값이 있다면 file[0]을 보여줘
    // console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      // uploadFile({ variables: { file } });
      const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };
  //
  //

  return (
    <>
      <div>이미지 업로드 연습하기</div>
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
