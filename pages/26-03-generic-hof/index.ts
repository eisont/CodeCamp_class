// 1. HOF -일반타입
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const result = firstFunc1("영희")(8);
console.log(result);

// 2. HOF - any타입
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const result21 = firstFunc2("영희")(8);
console.log(result21);

// 3-1. HOF - generic타입
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result3 = firstFunc3("영희")(8);
console.log(result3);
// T는 문자열 U는 숫자열

// 3-2. HOF - generic타입
function firstFunc31<T>(arg1: T) {
  return function secondFunc31<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result31 = firstFunc31(8)("영희");
console.log(result31);
// T는 문자열 U는 숫자열

// 4. HOF - generic타입(화살표함수)
// prettier-ignore
const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2];
};

const result41 = firstFunc4(8)("영희");
console.log(result41);
// T는 문자열 U는 숫자열

// 5. HOF - generic타입(컴포넌트에 응용해보기 - HOC)
// prettier-ignore
const withAuth= <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};

const result5 = withAuth("bbb")({ aaa: "철수" });
console.log(result5);
// T는 문자열 U는 숫자열
