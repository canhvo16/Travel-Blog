// import axios from 'axios'
import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments, CreateNewComment } from "../store/actions/BlogActions"
import CommentForm from './CommentForm'
import Client from "../services"

const mapStateToProps = ({ commentState, postState }) => {
  return { commentState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    createComments: (formValue) => dispatch(CreateNewComment(formValue))
  }
}

const Comment = (props) => {

  const handleChange = (e) => {
    props.createComments(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    const newComment = {
      post: props.id,
      review: props.commentState.review,
      likes: 0
    }
    await Client.post(`/newComment`, newComment)
  }

  useEffect(() => {
    props.fetchComments(props.id)
  }, [])

  return (
    <div>
      <div>
        {props.commentState.comments?.map((comment) => (
          <ul key={comment._id}>
            <p>{comment.review}</p>
          </ul>
        ))}
      </div>
      <div>
        <CommentForm newComment={props.commentState.review} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)