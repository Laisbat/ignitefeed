import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Sao_Paulo",
  }).format(publishedAt);

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime="2022-05-05 08:11:09">{publishedDateFormatted}</time>
      </header>
      <div className={styles.content}>
        {content?.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a
                  key={index}
                  href={line.content}
                  target="_blank"
                  rel="noreferrer"
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <textarea
          placeholder="Comente algo..."
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments?.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
