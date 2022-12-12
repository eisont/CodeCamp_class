export default function TypescriptPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
    // hobby?: string
    // ?: === 있을수도 있고 없을수도 있고
  }

  // 유틸리티 타입

  // 1. Pick 타입
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 === pick 반대 타입
  // 타입을 뺍니다.
  type Mytype2 = Omit<IProfile, "school">;

  // 3. Partial 타입
  // ?을 모두 붙여 버리는 것
  type Mytype3 = Partial<IProfile>;

  // 4. Required 타입
  // ?을 모두 버리는 것
  type Mytype4 = Required<IProfile>;
  // 딱 정해놓은 타입만 정할수 있습니다.

  // Union 타입
  type ZZZ = "aaa" | "qqq" | "rrr"; // Union 타입
  // let apple: ZZZ
  // apple = "qqq"
  // | === or , & === and

  // 5. Record 타입
  type Mytype5 = Record<ZZZ, IProfile>;
  // ZZZ 에 있는 놈들이 key, value로 지정되서 만들어집니다.

  // === 추가(선언병합) ====   (type vs interface )====
  // type은 추가가 안됩니다. 한 번 정하면 끝!!!!!
  // Interface 같은 이름으로 만들수 있다?
  // 위에 IProfile 이 있는데 밑에 또 만들수 있습니다.
  // 이름이 같은 경우 병합이 됩니다.
  // 밑에 코드인 candy가 위 IProfile에 추가됩니다.
  interface IProfile {
    condy: number;
  }

  let profile: IProfile;
  profile = {
    condy: 3,
    age: 10,
    hobby: "asskjf",
  };

  return <div>타입스크립트 연습하기</div>;
}
