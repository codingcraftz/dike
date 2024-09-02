import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else if (isAnimating) {
      // 모달이 닫힐 때 애니메이션을 적용한 후 제거
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // 애니메이션 지속 시간과 동일하게 설정

      return () => clearTimeout(timeout);
    }
  }, [isOpen, isAnimating]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${
          isOpen ? styles.slideIn : styles.slideOut
        }`}
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
