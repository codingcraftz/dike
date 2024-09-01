import styles from "./index.module.scss";
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <header className={styles.container}>
      <MenuBar />
      <div className={styles.right}>
        <AiOutlineSearch className={styles.icons} />
        <AiOutlineBell className={styles.icons} />
      </div>
    </header>
  );
};

export default Header;
