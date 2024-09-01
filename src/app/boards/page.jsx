"use client";
import TaskCard from "@/components/TaskCard";
import styles from "./page.module.scss";
import { BOARD_DATA } from "@/utils/constant";
import { FaSort } from "react-icons/fa";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import Modal from "@/components/Modal";
import TaskModal from "./TaskModal";

const options = ["진행중인 사건", "종료된 사건"];

const BoardsPage = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = () => {
    console.log("click");
  };

  const handleTaskCardClick = async (taskId) => {
    // 모달을 열고, API 호출을 시작합니다.
    setIsModalOpen(true);

    try {
      // const response = await fetch(`/api/tasks/${taskId}`); // 예시 API 엔드포인트
      // const data = await response.json();
      setModalData({ title: "test" });
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className={styles.container}>
      <Dropdown options={options} onSelect={handleSelect} />
      <div className={styles.cards}>
        {BOARD_DATA.map((data) => (
          <TaskCard
            onClick={handleTaskCardClick}
            key={data.id}
            clientName={data.clientName}
            clientNumber={data.clientNumber}
            receivedDate={data.receivedDate}
            category={data.category}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalData ? <TaskModal title={modalData.title} /> : <p>Loading...</p>}
      </Modal>
    </div>
  );
};

export default BoardsPage;
