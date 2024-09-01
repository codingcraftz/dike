import Image from "next/image";
import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg"
        width={75}
        height={75}
        alt="profile"
      />
    </div>
  );
};

export default Hero;
