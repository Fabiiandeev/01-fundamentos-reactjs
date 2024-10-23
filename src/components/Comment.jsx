import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://img.freepik.com/fotos-premium/vitoria-de-negocios-dando-um-polegar_1273586-8110.jpg?w=740" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Paulo Fernandes </strong>
              <time title='18 de Outubro às 13:22 h' dateTime="">Publícado cerca de 1h</time>

            </div>

            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir  
          </button>
          
        </footer>

      </div>
    </div>

  )
}