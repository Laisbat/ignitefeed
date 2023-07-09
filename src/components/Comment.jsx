import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/20651268?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Laís</strong>
              <time title="11 de Maio 2023" dateTime="2022-05-05 08:11:09">
                Publicado há 1h
              </time>
            </div>
            <button
              title="Remover comentário"
              className={styles.deleteButton}
              type="button"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>Ficou muito bom! Parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
