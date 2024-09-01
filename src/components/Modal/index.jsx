import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true); // 모달이 닫히는 상태로 설정
      setTimeout(() => {
        setIsClosing(false); // 애니메이션 후 상태 초기화
      }, 300); // 애니메이션 시간과 맞춰 설정 (0.3s)
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${isOpen ? styles.slideIn : styles.slideOut}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
