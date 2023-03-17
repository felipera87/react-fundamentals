import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/felipera87.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Reis</strong>
              <time title="March 11, 09:41pm" dateTime="2023-03-16 21:41:30">1 hour ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>
            Comment content
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}