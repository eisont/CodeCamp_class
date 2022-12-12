import {Wrap, 
    Rectangle, 
    Search, 
    Search_img, 
    Header, 
    My_span, 
    Profile, 
    Profile_img,
    Prifile_name,
    Right_arrow, 
    Menu_list, 
    Menu_ul,
    Menu_li, 
    Menu_li_3, 
    Question_list, 
    Question_list_1, 
    Question_list_text, 
    Question_num, 
    Question_text, 
    Question_list_bottom_arrow, 
    Menu_bottom, 
    Menu_bottom_list, 
    Menu_bottom_list_icon, 
    Menu_bottom_list_text, 
    Menu_bottom_list_text_4} from '../../styles/stylesheet'


export default function AAAPage() {
// 여기는 자바스크립트 쓰는 곳

// 위에 styled 명령어가 있기 때문에 사용이 가능합니다.
// 첫 글자는 무조건 대문자
// '' 따옴표가 아닌 `` 백틱(+css)을 사용합니다.



    return (
        // 여기는 html 쓰는 곳
        <Wrap>
            <Rectangle>
                <Search>
                    <Search_img src="aaa/ic-58-main-search-black.png"/>
                </Search>
                <Header>
                    <My_span>마이</My_span>
                    <Profile>
                        <Profile_img src="aaa/img-60-profile-image.png"/>
                        <Prifile_name>임정아</Prifile_name>
                        <Right_arrow src="aaa/ic-28-arrow.png"/>
                    </Profile>
                </Header>
                <Menu_list>
                    <Menu_ul>
                        <Menu_li>공지사항</Menu_li>
                        <Menu_li>이벤트</Menu_li>
                        <Menu_li_3>FAQ</Menu_li_3>
                        <Menu_li>Q&A</Menu_li>
                    </Menu_ul>
                </Menu_list>

                <Question_list>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.01</Question_num>
                            <Question_text>리뷰 작성은 어떻게 하나요?</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.02</Question_num>
                            <Question_text>리뷰 수정/삭제는 어떻게 하나요?</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.03</Question_num>
                            <Question_text>아이디/비밀번호를 잊어버렸어요.</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.04</Question_num>
                            <Question_text>회원탈퇴를 하고 싶어요.</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.05</Question_num>
                            <Question_text>출발지 설정은 어떻게 하나요?</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                    <Question_list_1>

                        <Question_list_text>
                            <Question_num>Q.06</Question_num>
                            <Question_text>비밀번호를 변경하고 싶어요.</Question_text>
                        </Question_list_text>
                        
                        <Question_list_bottom_arrow src="aaa/ic-70-arrow-right.png"/>

                    </Question_list_1>

                </Question_list>

                <Menu_bottom>
                    <Menu_bottom_list>
                        <Menu_bottom_list_icon src="aaa/ic-58-main-home-unselected.png"/>
                        <Menu_bottom_list_text>홈</Menu_bottom_list_text>
                    </Menu_bottom_list>
                    <Menu_bottom_list>
                        <Menu_bottom_list_icon src="aaa/ic-58-main-location-unselected.png"/>
                        <Menu_bottom_list_text>잇츠로드</Menu_bottom_list_text>
                    </Menu_bottom_list>
                    <Menu_bottom_list>
                        <Menu_bottom_list_icon src="aaa/ic-58-main-like-unselected.png"/>
                        <Menu_bottom_list_text>마이찜</Menu_bottom_list_text>
                    </Menu_bottom_list>
                    <Menu_bottom_list>
                        <Menu_bottom_list_icon src="aaa/ic-58-main-my-selected.png"/>
                        <Menu_bottom_list_text_4>마이</Menu_bottom_list_text_4>
                    </Menu_bottom_list>

                </Menu_bottom>
            </Rectangle>
        </Wrap>
    )
}