import { Header } from './components/Header';
import {Post} from './Post'
import './global.css';
export function App() {

  return(
    <div>
      <Header/>
      <Post 
       author = "Phelipe Fabian"
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id temporibus distinctio voluptas quisquam ipsa praesentium nulla excepturi nobis pariatur, ex explicabo magni ratione veritatis recusandae quo cumque! Suscipit, dignissimos."
      />

      <Post
        author ="Maria"
        content ="Um novo Post muito legal."
      />
    </div>
  ) 
    
}


