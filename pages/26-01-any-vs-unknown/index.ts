// any type
// 그냥 자바스크립트랑 같음
const getAny = (args: any) => {
  return args + 2;
  // 무슨 타입인지 모른다. js랑 같다. 모든 타입이 들어갈 수 있다.
};

// unknown 타입 (개발자에게 안전하게 코딩하도록 유도!!!)
// 코드량이 길어질 수 있습니다. 타입을 지정하는게 안정적으로 사용할 수 있습니다.
const result1 = getAny("철수");

// unknown type
// const getUnknown = (args: unknown) => {
//   return args + 2;
//   // 이 놈은 error입니다... 왜?
//   // 숫자인지? 문자열인지? 모른다...
// 가급적으로 타입을 모를때에는 unknown을 사용하는 것을 추천합니다.

// };
// const result2 = getUnknown("영희");
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요!!!!";
  }
  // unknown을 사용하면 어떤 타입이 나올지 예측이 가능합니다.
};
const result2 = getUnknown("영희");
