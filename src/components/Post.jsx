import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import{ format }  from 'date-fns'

export function Post({author, publishedAt}){
  const pusblishedDateFormat = format(publishedAt, " DD 'De' MMMMM  'às' HH:mmh ")
  return(
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}/>
          <div className={authorInfor}>
            <strong> {author.name} </strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time datetime=""></time>
       
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href=""> jane.design/doctorcare </a> </p>
        <p> 
          <a href="">#novoprojeto </a> 
          <a href="">#nlw </a>
          <a href="">#rocketseat </a> 
          
        </p>
      
      </div>

      <form className= {styles.commentForm}>
        <strong> Deixe seu FeedBack</strong>

        <textarea 
        placeholder='Deixe Seu Comentário...'
        />

        <footer>
          <button type='submit'> Publicar </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
    
  )
}