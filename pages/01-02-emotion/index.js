import {Wrap, Login, MyTitle, MyEmail} from '../../styles/emotion'


export default function AAAPage() {
// 여기는 자바스크립트 쓰는 곳

// 위에 styled 명령어가 있기 때문에 사용이 가능합니다.
// 첫 글자는 무조건 대문자
// '' 따옴표가 아닌 `` 백틱(+css)을 사용합니다.



    return (
        // 여기는 html 쓰는 곳
        <Wrap>
            <Login>
                로그인
                <MyTitle>
                    아이디
                    <MyEmail type = "email"/>

                    비밀번호
                    <MyEmail type = "password"/>

                </MyTitle>
            </Login>
        </Wrap>
    )
}