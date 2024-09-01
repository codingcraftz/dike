import cn from "@/utils/className";
import styles from "./index.module.scss";

const TaskCard = (props) => {
  const { clientName, clientNumber, receivedDate, category, onClick } = props;
  return (
    <div
      className={cn(styles.container, styles[category.color])}
      onClick={onClick}
    >
      <h2 className={styles.title}>
        <span>{clientName}</span>님의 <span>{category.name}</span>사건
      </h2>
      <p className={styles.footer}>
        <span>{clientNumber}</span>
        <span>{receivedDate}</span>
      </p>
    </div>
  );
};
export default TaskCard;
