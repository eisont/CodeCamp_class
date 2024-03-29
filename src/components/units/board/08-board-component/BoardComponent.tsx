// 여기에 소스코드 넣고 import 하겠습니다.

interface IProps {
  isEdit: boolean;
}

// BoardComponemt 그냥 따온겁니다. 이해하기 쉽게
const BoardComponent = (props: IProps) => {
  return (
    <div>
      <h1>{props.isEdit ? '수정' : '등록'}페이지</h1>
      제목: <input type='text' /> <br />
      내용: <input type='text' /> <br />
      <button>{props.isEdit ? '수정' : '등록'}하기</button>
    </div>
  );
};

export default BoardComponent;
