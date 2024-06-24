import styles from "../Home.module.css";
import type { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

export default function SkillIcon({ name, children }: Props) {
  return (
    <div className={`group ${styles.skillIcon}`}>
      <span className={`group-hover:block ${styles.skillTooltip} `}>
        {" "}
        {name}
      </span>
      {children}
    </div>
  );
}
