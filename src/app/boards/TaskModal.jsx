import styles from "./TaskModal.module.scss";
const TaskModal = ({ title }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
};
export default TaskModal;
