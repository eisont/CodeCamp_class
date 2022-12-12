// 여기는 컨테이너 컴포넌트

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [mywriter, setMyWriter] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async () => {
    // 등록하기 수정하기 폴더 구조는 같습니다.
    // const result = await updateBoard({
    // result 사용 안 할꺼니까 삭제합니다.
    await updateBoard({
      variables: {
        number: Number(router.query.mynumber),
        writer: mywriter,
        title: mytitle,
        contents: mycontents,
      },
      // number === 어떤 게시물을 선택할 것인가???
      // 기본적으로 문자열이기 때문에 Number을 추가하여 num으로 변경
    });
    alert("게시글 수정에 성공하였습니다!!!");
    // router.push(`/08-05-boards/${result.data.updateBoard.number}`) === 이것도 가능
    router.push(`/08-05-boards/${router.query.mynumber}`);
    // 수정하기 할때만 실행됩니다.
  };

  // 밑 함수명 직관적으로 네이밍하자
  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: { writer: mywriter, title: mytitle, contents: mycontents },
    });

    alert("게시글 등록에 성공하였습니다.");
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && mytitle !== "" && mycontents !== "") {
      setIsActive(true);
    }
  };
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
    if (mywriter !== "" && event.target.value !== "" && mycontents !== "") {
      setIsActive(true);
    }
  };
  const onChangeContents = (event) => {
    setMyContents(event.target.value);
    if (mywriter !== "" && mytitle !== "" && event.target.value !== "") {
      setIsActive(true);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
