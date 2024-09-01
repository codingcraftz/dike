import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <logo className={styles.logo}>DIKE</logo>
      <AiOutlinePlusCircle className={styles.plus} />
    </header>
  );
};

export default Header;
