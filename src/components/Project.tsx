import type { ReactNode } from "react";
import styles from "../Home.module.css";

interface ProjectProps {
  name: string;
  iconUrl: string;
  description: string;
  url: string;
  children: ReactNode[];
}

export default function Project(p: ProjectProps) {
  return (
    <a href={p.url} target="_blank">
      <article className={styles.project}>
        <span className={styles.projectInfo}>
          <img src={p.iconUrl} alt="Project Icon" />
          <span className={styles.projectText}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </span>
        </span>
        <div className={styles.projectIcons}>
          {p.children.map((i) => {
            return <div className={styles.projectIcon}>{i}</div>;
          })}
        </div>
      </article>
    </a>
  );
}
