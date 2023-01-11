import styled from '@emotion/styled';
import { IQuery } from '../../../../commons/types/generated/types';

const MyRow = styled.div`
  display: flex;
  // justify-contents: space-between;
`;

const MyColumn = styled.div`
  width: 25%;
`;

interface IProps {
  data: Pick<IQuery, 'fetchBoards'>;
}

const Board = (props: IProps) => {
  return (
    <div>
      {props.data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
};

export default Board;
