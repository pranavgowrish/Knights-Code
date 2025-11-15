"use client";
import Image from "next/image";
import Button from "@/components/button";
import styles from "@/app/home.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleTeacher = () => {
    router.push("/teacher");
  };

  const handleStudent = () => {
    router.push("/StudentMap");
  };

  return (
    <div className={styles.container}>
      {/* Background */}
      <Image
        src="/background/splash_screen_BG.png"
        alt="Background"
        fill
        className={styles.background}
        priority
      />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.row}>
          {/* Left Button */}
          <div className={styles.buttonContainer}>
            <Button
              text="School Master"
              onClick={handleTeacher}
              className={styles.button + " " + styles.buttonRed}
            />
          </div>

          {/* Center Text */}
          <div className={styles.buttonContainer}>
            <h1 className={styles.title}>Play Now!</h1>
          </div>

          {/* Right Button */}
          <div className={styles.buttonContainer}>
            <Button
              text="Scholar"
              onClick={handleStudent}
              className={styles.button + " " + styles.buttonGreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
