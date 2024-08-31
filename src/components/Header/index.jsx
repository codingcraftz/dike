import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <Link href="/" className={styles.logo}>
        Dike
      </Link>
    </header>
  );
};

export default Header;
