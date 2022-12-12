import { useState } from "react";

import {
  Wrap,
  Rectangle,
  Border,
  Border_text,
  Header,
  Input_header,
  Input_top_box,
  Input_text,
  Input_input,
  Input_section,
  Input_section_top_box,
  Input_input_2,
  Input_content_input,
  Input_address,
  Input_address_1,
  Input_address_input_1,
  Input_address_input_2,
  Address_bt,
  Input_youtube,
  Phote_plus,
  Photo_text,
  Photo_box_total,
  Photo_box,
  Main_setting,
  Select_youtube,
  Text_youtube,
  Select_Photo,
  Text_Phote,
  Bt_bottom,
} from "../../styles/board";

export default function AAAPage() {
  // 리액트 훅 === useState() 사용
  // [state, setState] = useState
  // state === 변수
  // setState === 변수를 바꿔주는 기능
  // useState === 변수 기본값
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitlteError] = useState("");

  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
    // name에 담긴다.
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  function onChangeAddress(event) {
    setAddress(event.target.value);
  }

  function onChangeLink(event) {
    setLink(event.target.value);
  }

  function onClickSignup() {
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError();
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError();
    }

    if (title === "") {
      setTitlteError("제목을 입력해주세요.");
    } else {
      setTitlteError();
    }

    if (content === "") {
      setContentError("내용을 입력해주세요.");
    } else {
      setContentError();
    }

    if (address === "") {
      setAddressError("주소를 모두 입력해주세요.");
    } else {
      setAddressError();
    }

    if (link === "") {
      setLinkError("링크를 입력해주세요.");
    } else {
      setLinkError();
    }
  }

  return (
    // 여기는 html 쓰는 곳
    <Wrap>
      <Rectangle>
        <Border>
          <Border_text>게시물 등록</Border_text>
        </Border>
        <Header>
          <Input_header>
            <Input_top_box>
              <Input_text>작성자</Input_text>
              <Input_input
                onChange={onChangeName}
                type="name"
                placeholder="이름을 적어주세요."
              />
              <div>{nameError}</div>
            </Input_top_box>

            <Input_top_box>
              <Input_text>비밀번호</Input_text>
              <Input_input
                onChange={onChangePassword}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <div>{passwordError}</div>
            </Input_top_box>
          </Input_header>

          <Input_section>
            <Input_section_top_box>
              <Input_text>제목</Input_text>
              <Input_input_2
                onChange={onChangeTitle}
                type="text"
                placeholder="제목을 작성해주세요."
              />
              <div>{titleError}</div>
            </Input_section_top_box>

            <Input_section_top_box>
              <Input_text>내용</Input_text>
              <Input_content_input
                onChange={onChangeContent}
                type="text"
                placeholder="내용을 작성해주세요."
              />
              <div>{contentError}</div>
            </Input_section_top_box>
          </Input_section>

          <Input_address>
            <Input_text>주소</Input_text>
            <Input_address_1>
              <Input_address_input_1
                onChange={onChangeAddress}
                type="text"
                placeholder="07250"
              />
              <Address_bt>우편번호 검색</Address_bt>
            </Input_address_1>
            <Input_address_input_2 onChange={onChangeAddress} type="text" />
            <Input_address_input_2 onChange={onChangeAddress} type="text" />
            <div>{addressError}</div>
          </Input_address>

          <Input_youtube>
            <Input_text>유튜브</Input_text>
            <Input_input_2
              onChange={onChangeLink}
              type="text"
              placeholder="링크를 복사해주세요."
            />
            <div>{linkError}</div>
          </Input_youtube>

          <Phote_plus>
            <Photo_text>사진 첨부</Photo_text>
            <Photo_box_total>
              <Photo_box>Upload</Photo_box>
              <Photo_box>Upload</Photo_box>
              <Photo_box>Upload</Photo_box>
            </Photo_box_total>
          </Phote_plus>

          <Main_setting>
            <Select_youtube name="sns" type="radio" />
            <Text_youtube>유튜브</Text_youtube>
            <Select_Photo name="sns" type="radio" />
            <Text_Phote>사진</Text_Phote>
          </Main_setting>
        </Header>

        <Bt_bottom onClick={onClickSignup}>등록하기</Bt_bottom>
      </Rectangle>
    </Wrap>
  );
}
