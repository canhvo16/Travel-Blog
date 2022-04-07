import { connect } from 'react-redux'
import { LoadPosts, LoadComments } from '../store/actions/BlogActions'
import { useEffect } from 'react'
import Comment from './Comment'
import CreatePost from './CreatePost'


const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadComments()),
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Post = (props) => {

  useEffect(() => {
    props.fetchPosts()
    props.fetchComments()
  }, [])

  return (
    <div>
      <CreatePost />
      {props.postState.posts?.map((post) => (
        <div className="post">
          <div className="postTitle">
            <h1>{post.title}</h1>
            {post.author && <h4>Author: {post.author}</h4>}
            <h4>{post.description}</h4>
          <div className="likes">
            <p>{post.likes} Likes</p>
            <button className="likeButton">Like This Post Please</button>
          </div>
          </div>
          <Comment id={post._id} />
          {/* <CreateComment id={post._id} /> */}
          </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)