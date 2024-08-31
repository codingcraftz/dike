"use client";
import styles from "./index.module.scss";
import Modals from "@/components/Modals";
import ToModal from "../ToModal";
import useModals from "@/hooks/useModals";

const TodoHeader = () => {
  const { openModal } = useModals();
  const handleClick = () => {
    openModal(ToModal, { foo: "bar" });
  };
  return (
    <section className={styles.container}>
      <button onClick={handleClick}>업무 등록</button>
      <button>업무 요청</button>
      <button>업부 일정</button>
      <Modals />
    </section>
  );
};

export default TodoHeader;
