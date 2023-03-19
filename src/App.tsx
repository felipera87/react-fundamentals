import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import './global.css';

import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipera87.png',
      name: 'Felipe Reis',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello' },
      { type: 'paragraph', content: 'This is the post content' },
      { type: 'paragraph', content: 'enjoy' },
      { type: 'link', content: 'awesome link, click please' },
    ],
    publishedAt: new Date('2023-03-17 14:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipera87.png',
      name: 'Felipe Reis2',
      role: 'Web Developer2'
    },
    content: [
      { type: 'paragraph', content: 'Hello' },
      { type: 'paragraph', content: 'This is the post content' },
      { type: 'paragraph', content: 'enjoy' },
      { type: 'link', content: 'awesome link, click please' },
    ],
    publishedAt: new Date('2023-03-16 12:30:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}