import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { MouseEvent, useState } from 'react';

interface IProps {
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>;
  lastPage: number;
}

const Pagination = (props: IProps) => {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element) props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return; // 페이지가 1일때 이전페이지는 실행 불가
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <>
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map(
        // _ => el 자리인데 안 쓰기 때문에 _으로 자리를 채웠습니다.
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span key={index + startPage} onClick={onClickPage} id={String(index + startPage)}>
              {' '}
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음 페이지</span>
    </>
  );
};

export default Pagination;
