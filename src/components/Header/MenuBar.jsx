"use client";
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import styles from "./MenuBar.module.scss";

const MENUS = [
  { title: "홈", path: "/" },
  { title: "고객 관리", path: "/clients" },
  { title: "사건 관리", path: "/cases" },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <AiOutlineMenu className={styles.icon} onClick={toggleMenu} />
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {MENUS.map((menu) => (
            <Link key={menu.path} href={menu.path}>
              {menu.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
