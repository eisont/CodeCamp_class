// 1. string
const getString = (arg: string): string => {
  return arg;
};

const result1 = getString("철수");

// 2. Number
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(222);

// 3. any 타입
const getAny = (arg: any): any => {
  return arg;
};

const result3_1 = getAny("철수");
const result3_2 = getAny(333);
const result3_3 = getAny(true);
// any의 문제점은 마우스를 올렸을때 결과를 모르는 것!!!!!!
// 이 문제점을 보안하고자 나온 타입 generic

// 4. any 2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic
// 화살표함수보다 일반함수가 쉽다.
// 들어온 타입을 그대로 사용
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

// 6. generic 2
// prettier-ignore
// prettier 자동정렬을 무시해줍니다.
function getGenerics<MyType1,MyType2,MyType3> (arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2,MyType1]{
  return [arg3, arg2, arg1]
}
const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// 7. generic - 축약1
// prettier-ignore
// prettier 자동정렬을 무시해줍니다.
function getGenericsT<T1,T2,T3> (arg1: T1, arg2: T2, arg3: T3): [T3, T2,T1]{
  return [arg3, arg2, arg1]
}
const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

// 8. generic - 축약2
// prettier-ignore
// prettier 자동정렬을 무시해줍니다.
function getGenericsTUV<T, U, V> (arg1: T, arg2: U, arg3: V): [V, U, T]{
  return [arg3, arg2, arg1]
}
const result8 = getGenericsTUV("철수", "다람쥐초등학교", 8);

// 9. useSate에서의 generic!!!
// prettier-ignore
// function getGenericsTuv<T, U, V> (arg1: T, arg2: U, arg3: V): [V, U, T]{
//   return [arg3, arg2, arg1]
// }
// const result9 = getGenericsTuv<string, string, number>(
//   "철수",
//   "다람쥐초등학교",
//   "철수"
// );

// const [school, setSchool] = useState<string>("다람쥐초등학교")

// 타입 추론
// const apple = 3;
// 타입 명시
// const apple: number = "철수";
// console.log(apple);

// 화살표 함수에서의 generic!!
const getGenericsTuv=<T, U, V> (arg1: T, arg2: U, arg3: V): [V, U, T]=>{
  return [arg3, arg2, arg1]
}
