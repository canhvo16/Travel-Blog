import Post from '../components/Post'

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1 className="header">Travel Blog</h1>
      </header>
      <div className="body">
        <Post />
      </div>
    </div>
  )
}

export default Home
