// 여기는 컨테이너 컴포넌트
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

// props: IBoardWriteProps 를 보기 위해서 지정합니다.

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.mynumber) };
    if (myWriter !== "") myVariables.writer = myWriter;
    if (myTitle !== "") myVariables.title = myTitle; // 한 줄이기 때문에 {} 생략 가능
    if (myContents !== "") myVariables.contents = myContents;
    await updateBoard({
      variables: myVariables,
    });
    alert("게시글 수정에 성공하였습니다!!!");
    router.push(`/09-01-boards/${router.query.mynumber}`);
    // 수정하기 할때만 실행됩니다.
  };

  const callGraphqlApi = async () => {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });

    alert("게시글 등록에 성공하였습니다.");
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
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
      data={props.data}
    />
  );
}
