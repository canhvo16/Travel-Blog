import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/BlogActions'
import { useEffect } from 'react'

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
      {props.postState.posts?.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <h4>{post.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)