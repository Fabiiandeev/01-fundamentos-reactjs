import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css';

// author :{avatar_url "", name:"", role"""}
// pudlishedAt: Date
// Content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/33097450?v=4',
      name: 'Phelipe Fabian',
      role: 'Web Develop',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragrapy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'paragrapy', content: 'O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare', },
      { type: 'hashtag', content: '#novoprojeto' },
      { type: 'hashtag', content: '#nlw' },
      { type: 'hashtag', content: '#rocketseat' },

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://img.freepik.com/fotos-premium/vitoria-de-negocios-dando-um-polegar_1273586-8110.jpg?w=740',
      name: 'Paulo Fernandes',
      role: 'Educational',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋,' },
      { type: 'paragrapy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'paragrapy', content: 'O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare', },
      { type: 'hashtag', content: '#novoprojeto' },
      { type: 'hashtag', content: '#nlw' },
      { type: 'hashtag', content: '#rocketseat' },

    ],
    publishedAt: new Date('2022-05-10  20:00:00'),

  }


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
                author={post.author}
                content={post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );

}


