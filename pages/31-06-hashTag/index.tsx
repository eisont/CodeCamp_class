import { useState } from "react";

export default function HashTagPage() {
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUpHash = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      // #해시태그
      event.target.value = "";
    }
  };
  // 삭제할 경우 인덱스 하나하나 splice 가지고 와서

  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
}
