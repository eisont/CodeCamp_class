import { ChangeEvent, useState } from 'react';
//이전에 사용한 기술의 문제점
// 1. 미리보기 시간이 걸림 -> js로 브라우제어서 url 만들기
// 2. 게시글 등록을 하지 않고 페이지를 나갈 경우 , 불필요한 이미지(찌꺼기)들이 스토리지에 쌓이게 됩니다. -> 최종 게시긍 등록과 uploadFile을 합친다.
// 이미지에만 사용하는 기술이 아닙니다.
// 기존 이미지 업로드 방식은 비효율적입니다. === fileRender

const ImageUploadPreviewPage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // blob 형태의 데이터, 이미지 데이터가 큽니다. 이 js 내에서만 사용하고 버릴 예정

    if (!file) {
      alert('파일이 없습니다. ');
      return;
    }

    const fileReader = new FileReader(); // 여기서 js내여서 파일을 읽어서 보여주는 기능
    fileReader.readAsDataURL(file); // file을 url형태로 읽겠습니다.

    // 읽는데 시간이 걸릴거라 다 읽을 경우의 조건을 추가합니다. / 다 읽을 경우 data라는 변수로 들어옵니다.
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
  };

  return (
    <>
      <input type='file' onChange={onChangeFile} />
      <img src={imageUrl} />
    </>
  );
};

export default ImageUploadPreviewPage;
