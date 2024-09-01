"use client";
import Hero from "@/components/Hero";
import styles from "./page.module.scss";
import Link from "next/link";
import HomeNavbar from "./_components/HomeNavbar";
import { useState } from "react";

const HomePage = () => {
  const todayTasks = [
    {
      title: "접수 요청",
      description: "2020가단 1345 준비서면",
      status: "pending",
      priority: 0,
      createdDate: "2024-06-11",
      dueDate: "2024-07-14",
    },
  ];
  const weeklyTasks = [];
  const monthlyTasks = [];
  const [optionState, setOptionState] = useState("today");
  const handleNavClick = (option) => {
    setOptionState(option);
  };
  return (
    <div className={styles.container}>
      <section className={styles.heroBox}>
        <Hero />
        <div className={styles.heroDescription}>
          <p>
            안녕하세요 <strong>푸바오</strong>님
          </p>
          <p>
            오늘 <strong>5개의</strong> 업무가 있어요.
          </p>
        </div>
      </section>
      <HomeNavbar option={optionState} onClick={handleNavClick} />
    </div>
  );
};

export default HomePage;
