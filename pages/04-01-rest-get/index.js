import axios from 'axios'
import { useState } from 'react'
// 설치가 되어있는 경우 자동화 완성을 도와줍니다.
// 설치가 되었는지 확인할때 pakage.json 파일에서 가능합니다. 
// 많약 없는 경우 yarn install 을 사용해서 설치합니다.

// 파일 실행하기 위해서는 package.json 파일이 있는 폴더에서 yarn dev를 입력합니다.

//루트가 뭐야?

export default function RestGetPage (){
//함수와 함수형 컴포넌트는 다른겁니다.
//연결 === 바인딩
// export 를 사용해서 내보냅니다.

    const [data, setData] = useState ("")
    // import 해야 사용할 수 있습니다. 
    // import { useState } from 'react'
    // 빈 값일 경우 화면에 보이지 않습니다. 
    const [id, setId] = useState ("")

    async function callRestApi(){
        const result = await axios.get("https://koreanjson.com/posts/1")
        // posts/1 === end point

        console.log(result)
        // 버튼을 누른것을 확인하기 위한 코드
        // 전체 결과
        console.log(result.data.title)
        // 원하는 데이터 뽑는 결과 , 나는 data.title 보고 싶어요.

        setData(result.data.title)
        // 버튼을 누를 경우 data.title이 출력이 됩니다.
        setId(result.data.id)
    }


    return (
        <> {/* Fragments === 프레그먼트 */}
            <div>{data}</div>
            <div>{id}</div>
            <button onClick={callRestApi}>REST-API 요청하기!!!</button>
        </>
    )

}