import { useState } from "react";
import Head from "next/head";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  // 최소 금액은 100원입니다. 그래서 초기 설정을 100으로 하겠습니다.
  const [amount] = useState(100);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    // 여기에 적는 가맹점 식별 코드는 시스템 설정에 있어요!!!
    IMP.init("imp48430943"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 밑 코드를 주석하면 random으로 출력됩니다.
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: "김치훈",
        buyer_tel: "010-8527-8113",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirct_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // 성공 시 rsp에 뭐가 담겨있을까요?
          console.log(rsp);
          // 백엔드에 결제관리 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading
          // 실제로 포폴 할때는 백엔드
          // 각 컴퓨터에 등록되는 시간이 다르기 때문에 프론트에서는 new Date()를 함부로 하지 않아요. 그리고 문제도 발생되요.
          // 그래서 new Date()를 서버에는 올리지 않습니다. 시간은 백엔드에 받아요.
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };
  return (
    <>
      <Head>
        {/* 여기에 작성한 것은 html head 부분과 동일한 기능을 합니다. */}
        {/*  jQuery  */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          // 최신 버전 적는 칸은 {}중괄호 모두 제거하고 번호만 작성해주면 됩니다.
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <>
        {/* 우리는 this를 사용하지 않기 때문에 삭제합니다. */}
        <button onClick={requestPay}>결제하기</button>
      </>
    </>
  );
}
