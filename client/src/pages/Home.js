import Post from '../components/Post'
import Comment from '../components/Comment'

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="header">Travel Blog</h1>
      </header>
      <Post />
      <Comment />
    </div>
  )
}

export default Home