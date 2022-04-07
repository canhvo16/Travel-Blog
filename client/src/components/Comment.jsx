// import axios from 'axios'
import { connect } from "react-redux"
import { CreateNewComment } from "../store/actions/BlogActions"
import CommentForm from './CommentForm'
import Client from "../services"

const mapStateToProps = ({ commentState, postState }) => {
  return { commentState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

  const checkId = (comment) => {
    if (comment.post === props.id) {
      return comment
    }
  }

  let commentArray = props.commentState.comments.filter(checkId)
  console.log(commentArray)

  return (
    <div>
      <div>
        {commentArray?.map((comment) => (
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