import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 같은 State를 하나로 묶기 위해서 다른 함수를 만들어 적용을 합니다.

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };
  return (
    // 12-03-modal-address 파일에서 필요없는거 삭제!!!
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>

      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
