// 정규표현식
// 우리가 원하는 패턴에 일치하는지 안하는지 확인

// /apple/ 조건
// ("apple") 입력값
// /apple/.test("apple")
// true
// /apple/.test("applq")
// false
// /a@a.com/.test("a@a.com")
// true

// w 한 글자의 문자 또는 숫자
// /\w@a.com/.test("2@a.com")
// /\w@a.com/.test("q@a.com")
// true
// /\w@a.com/.test("asfasfsfesfq@a.com")
// true
// 조건이랑 같은 부분만 있으면 true

// 시작을 알려주는 코드 === ^
// 끝을 알려주는 코드 === $
// /^\w@a.com$/.test("asfasfsfesfq@a.com")
// false

// /^\w\w\w\w\w\w\w\w\w\w\w\w@a.com$/.test("asfasfsfesfq@a.com")
// true
// 완전 비효율적

// \w+ 한개 이상일 때
// /^\w+@\w+.\w+$/.test("asdfasd@a.com")
// true
// \w? 없거나 한개 이상일 때
//  /^\w?@a.com$/.test("d@a.com")
// true
// \w* 없거나 한개이거나 그 이상일 때
//  /^\w*@a.com$/.test("d@a.com")
// true

// 한글자 이상 한글자 이상 한글자 이상
// /^\w+@\w+.\w+$/.test("asdfasd@a.com")
// 여기서 .은 모든 것을 의미합니다. . , ; 등등 가능합니다.
// true
// /^\w+@\w+\.\w+$/.test("asdfasd@a.com")
// true

// /010-1234-5678/.test("010-1234-5678")
// true
// 시작점과 끝점을 나타냅니다.
// /^010-1234-5678$/.test("010-1234-5678")
// true

// w가 들어가면 문자도 들어갈수 있게 됩니다.
// /^\w-1234-5678$/.test("010-1234-5678")
// true

// d를 사용해서 숫자만 가능하게 만들겠습니다.
// d{숫자 갯수}를 지정합니다.
// 숫자갯수를 여러개 지정할 경우 d{3,4}이렇게 지정하면됩니다.
// /^\d{3}-\d{3,4}-\d{4}$/.test("123-1234-5678")
// true

// 문자만 선택하는 것은 없습니다.
// 따로 지정되있는 코드가 있습니다.
// [a-zA-Z]+ 한개 이상
// [a-zA-Z]? 한개 또는 없음
// [a-zA-Z]* 한개 또는 그 이상
// [a-zA-Z]

// \s  공백
