// gql 임포트할때 apollo/client에서 했는지 graphql-request에서 임포트 했는지 확인해보세요. 둘 기능이 달라 오류 될 수 있습니다.

import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { IMutation, IMutationUploadFileArgs } from '../../src/commons/types/generated/types';

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

const ImageUploadSubmitPage = () => {
  const [files, setFiles] = useState<File | undefined[]>([undefined, undefined, undefined]);
  const [imageUrls, setImageUrls] = useState('', '', '');

  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert('파일이 없습니다!');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        const tempUrls = [...imageUrls];
        tempUrls[number] = data.target?.result;

        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[number] = file;
        setFiles(tempFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    // Promise에는 Promise가 들어가야 하지만 undefined가 들어갈 경우 무시합니다. 
    Promise.all(
      
    )

    files.map((el)=>{
      return el ? uploadFile({variables: {file: el}}: undefined)
      if(el){
        return uploadFile({variables: {file: el}})
      }else {
        return undefined
      }
    })

    await uploadFile({ variables: { file: files[0] } });
    const imageUrl = result1.data?.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: '영희',
          password: '1234',
          title: '안녕',
          contents: '이미지 업로드',
          images: [imageUrl],
        },
      },
    });

    console.log(result2.data.createBoard._id);
  };

  return (
    <>
      <input type='file' onChange={onChangeFile(0)} />
      <input type='file' onChange={onChangeFile(1)} />
      <input type='file' onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
};

export default ImageUploadSubmitPage;
