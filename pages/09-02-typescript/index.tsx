export default function TypescriptPage() {
  // 타입 추론
  // 처음에 지정한 데이터 타입이 변수에 타입 지정됩니다.
  let aaa = "안녕하세요";
  // aaa = 3
  // 읽지 못하네???

  // 타입명시
  let bbb: string = "반갑습니다";

  // 문자타입
  let ccc: string;
  // ccc = 3 // 숫자는 입력이 안됩니다.
  ccc = "반가워요!!!";

  // 숫자타입
  let ddd: number = 10;
  ddd = 39;
  // ddd = "방가방가" // ddd는 숫자이기 때문에 문자는 입력 불가입니다.

  // 불린타입
  let eee: boolean = true;
  let fff: boolean = false;
  eee = false;
  // eee = "true"   // true로 작동합니다..
  fff = true;
  // fff = "false"   // true로 작동합니다.

  // 배열타입
  // let ggg: number[] =  [1,2,3,4,5,"안녕하세요"] // number만 들어갈수 있기 때문에 문자는 못 들어옵니다.
  // let hhh: string[] = ["철수","영희","훈이",132]
  let jjj: (number | string)[] = [1, 2, 3, 4, 5, "안녕하세요."];
  // | 한개 === or // & 한개 === and
  // |을 사용해서 숫자, 문자열을 사용할 수 있게 설정합니다.

  // 객체타입
  // 인터페이스 작성
  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string;
    // 객체에서 해당 key에 value가 있으면 보내주고 싶다할 때!
    // → ? 를 이용해주시면 됩니다.
    // ? 는 ‘있으면’ 이라는 뜻 입니다.
  }

  let profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };
  profile.age = "8살";
  // profile.school = 123   //school은 string이기 때문에 불가합니다.

  // 함수타입
  // const add = (money1, money2, unit) => {
  //     return money1 + money2 + unit
  // }
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit;
  };
  // const add = (money1: number, money2: number, unit: string): number => {
  //     return money1 + money2 + unit
  // } === 이건 에러 === 숫자+숫자+문자 = 문자이기 때문에 number로 지정하면 에러납니다.
  add(1000, 2000, "원");

  return <div>타입스크립트 연습하기</div>;
  // 한 줄 = ()생략
}
