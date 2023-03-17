import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/felipera87.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Reis</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="March 11, 09:41pm" dateTime="2023-03-16 21:41:30">Published 1 hour ago</time>
      </header>

      <div className={styles.content}>
        <p>Hello</p>
        <p>This is the post content</p>
        <p>enjoy</p>
        <p><a href="">awesome link, click please</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          placeholder="Write your comment"
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  )
}