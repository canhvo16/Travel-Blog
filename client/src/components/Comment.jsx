import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments, CreateNewComment } from "../store/actions/BlogActions"

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadComments())
  }
}

const Comment = ({ props, id }) => {

  const handleChange = (e) => {
    props.createNewComment(e.target.value)
  }
  
  const handleSubmit = (e) => {
    props.createNewComment(props.commentState.newComment)
  }

  return (
    <div>
      <h3>Comments</h3>
      <CommentForm />

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)