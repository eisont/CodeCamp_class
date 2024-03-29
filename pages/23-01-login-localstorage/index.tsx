import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../src/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    console.log(accessToken);
    alert('로그인에 성공하였습니다!!');
    router.push('/23-02-login-localstarage-success');
  };

  return (
    <div>
      이메일: <input type='text' onChange={onChangeEmail} />
      <br />
      비밀번호: <input type='password' onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </div>
  );
};

export default LoginPage;
