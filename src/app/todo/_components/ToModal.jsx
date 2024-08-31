import { useEffect } from "react";
import ReactModal from "react-modal";

const ToModal = ({ onSubmit, onClose }) => {
  return (
    <ReactModal isOpen ariaHideApp={false}>
      <div>모달 입니다.</div>
      <button onClick={onClose}>닫기</button>
    </ReactModal>
  );
};

export default ToModal;
