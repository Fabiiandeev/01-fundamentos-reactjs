import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img className = {styles.author} 
           src="https://avatars.githubusercontent.com/u/33097450?v=4" 
          />
          <div className={styles.authorInfor}>
            <strong>Phelipe Fabian</strong>
            <span>Web Develop</span>
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

        <button type='submit'> Comentar </button>
      </form>
    </article>
    
  )
}