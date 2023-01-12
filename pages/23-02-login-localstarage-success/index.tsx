import { useQuery, gql } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
};

export default LoginSuccessPage;
