import styled from '@emotion/styled'

export const Wrap = styled.div `
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Rectangle = styled.div `
    position: relative;
    width: 640px;
    height: 1138px;
    font-weight: 900;
    text-align: center;
    background-color: #fff;
    border: 1px solid #999;
    overflow: hidden;
`


// Search
// ==============================
export const Search = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Search_img = styled.img `
    width : 32px;
    margin: 36px 48px 0px 0;
    padding: 3px 4px 4px 3px;
    object-fit: contain;
`


// Header
// ===========================
export const Header = styled.div `
    width: 100%; 
    display: flex;
    justify-content: space-between;
    alingn-items: center;
`

export const My_span = styled.span `
    margin: 40px 91px 50px 50px;
    font-size: 40px;
    font-weight: bold;
    line-height: 1.07;
    letter-spacing: -1.33px;
    color: #1f1f1f;
`



// Profile
// ===========================================
export const Profile = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Profile_img = styled.img `
    width: 60px;
    margin: 31px 0px 32px 11px;
    object-fit: contain;
`
export const Prifile_name = styled.p `
    margin: 48px 0 49px 20px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.78;
    letter-spacing: -0.8px;
    color:#1f1f1f;
`
export const Right_arrow = styled.img `
    width: 40px;
    margin: 47px 48px 48px 4px;
    padding: 8px 11px 8px 5px;
    object-fit: contain;
`


// Menu_list
// ==================================

export const Menu_list = styled.div `
    width: 100%;
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(0,0,0,0.1);
`
export const Menu_ul = styled.ul `
    width: 100%;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Menu_li = styled.li `
    height: 32px;
    margin-right: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #cacaca;
`

export const Menu_li_3 = styled.li `
    line-height: 10px;
    height: 32px;
    margin-right: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #ff1b6d;
    border-bottom: 2px solid #ff1b6d;
    transform: translateY(10px);
`




export const Question_list = styled.ul `
    width: 100%;
    margin-left: 10px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`
export const Question_list_1 = styled.li `
    text-align: start;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    margin-bottom: 10px;
`

export const Question_list_text = styled.div `
    text-align: start;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Question_num = styled.p `
    color: #adadad;
    margin-bottom: 14px;
    font-size: 18px;
`

export const Question_text = styled.p `
`

export const Question_list_bottom_arrow = styled.img `
    height: 60px;
`




export const Menu_bottom = styled.ul`
    margin: 0;
    padding: 10px 50px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(0,0,0,0.1);
`

export const Menu_bottom_list = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Menu_bottom_list_icon = styled.img`
    width: 58px;
`
export const Menu_bottom_list_text = styled.p`
    font-size: 16px;
    color: #adadad;
`
export const Menu_bottom_list_text_4 = styled.p`
    color: #ff1b6d;
`