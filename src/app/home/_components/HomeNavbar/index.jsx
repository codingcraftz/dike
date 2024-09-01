import styles from "./index.module.scss";

const HomeNavbar = ({ option, onClick }) => {
  const options = ["today", "week", "month"];

  return (
    <nav className={styles.container}>
      {options.map((opt) => (
        <button
          key={opt}
          className={`${styles.option} ${option === opt ? styles.active : ""}`}
          onClick={() => onClick(opt)}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default HomeNavbar;
