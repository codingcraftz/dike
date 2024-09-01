import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link className={styles.button} href="/home">
        일하러 가기
      </Link>
    </div>
  );
}
