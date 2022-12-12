import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.1);
`;

const Body = styled.div``;

// const LayoutSidebar = styled.div`
//   width: 200px;
//   height: 500px;
//   background: orange;
// `;

const HIDDEN_HEADERS = ["/12-05-modal-refactoring"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        {/* <LayoutSidebar>Sidebar</LayoutSidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}
