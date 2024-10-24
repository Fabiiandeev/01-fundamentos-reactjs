import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props){
  return(
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={props.author.avatarUrl}/>
          <div className={styles.authorInfor}>
            <strong> {props.author.name} </strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title='18 de Outubro às 13:22 h' dateTime="">Publícado há 1h</time>
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