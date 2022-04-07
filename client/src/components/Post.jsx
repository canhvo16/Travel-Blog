
import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/BlogActions'
import { useEffect } from 'react'
import Comment from './Comment'

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const Post = (props) => {

  useEffect(() => {
    props.fetchPosts()
  }, [])

  return (
    <div>
      <div className="post">
        <h1 className="postTitle">Title</h1>
        <h4>Description</h4>
        <div className="likes">
          <p>0 Likes</p>
          <button>Like This Post Please</button>
        </div>
      </div>
      {props.postState.posts?.map((post) => (
        <div>
          <div className="post">
            <h1 className="postTitle">{post.title}</h1>
            <h4>{post.description}</h4>
            <div className="likes">
              <p>{post.likes} Likes</p>
              <button>Like This Post Please</button>
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