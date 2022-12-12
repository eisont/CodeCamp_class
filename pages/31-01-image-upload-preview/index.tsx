import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // file이 숫자였다. blob 형태로 만들어줍니다.?, 데이터베이스에 저장 가능한데 엄청난 data로 올라가기 때문에 직접 올리진 않고 미리보기 용도로만 사용하고 버릴겁니다.
    // file이 없다면
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    // 이미 내장되어있는 기능입니다.
    const fileReader = new FileReader();
    // file을 url 형식으로 읽겠습니다.
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      // 다 읽은 데이터가 들어옵니다.

      if (typeof data.target?.result === "string") {
        // 그 data 안에는 콘솔로 확인 가능
        console.log(data.target?.result); // 값이 없을 수도 있을때는 옵셔널 체이닝 사용해서 없을 경우도 알려줍니다.
        setImageUrl(data.target?.result); // 이미 string올 추론이 되었습니다. undefined일수도 있어요. 그렇기에 if문 추가
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </>
  );
}
