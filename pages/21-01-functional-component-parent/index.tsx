import FunctionComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // 자식 컴포넌트를 임포트하겠습니다.
  // return <FunctionComponentChildPage count={123} />;
  // 함수로 표현할 수 있습니다.
  // jsx이기 때문에 <></>로 감싸서 내보내야합니다.
  return <>{FunctionComponentChildPage({ count: 123 })} </>;
}
