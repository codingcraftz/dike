"use client";

import { useRouter } from "next/navigation";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { RiCalendarTodoFill } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";
import cn from "@/utils/className";
import { usePathname } from "next/navigation";

const OPTIONS = [
  { title: "Boards", icon: <TbLayoutBoardSplit />, path: "/boards" },
  { title: "Todo", icon: <RiCalendarTodoFill />, path: "/todo" },
  {
    title: "Notifications",
    icon: <MdNotificationsNone />,
    path: "/notifications",
  },
  { title: "Account", icon: <FaRegUser />, path: "/account" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      {OPTIONS.map((option) => (
        <Link
          className={cn(
            styles.option,
            pathname === option.path && styles.active,
          )}
          key={option.path}
          href={option.path}
        >
          {option.icon}
          <p>{option.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
