// import axios from 'axios'
import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments, CreateNewComment } from "../store/actions/BlogActions"
import CommentForm from './CommentForm'

const mapStateToProps = ({ commentState, postState }) => {
  return { commentState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    createComments: (formValue) => dispatch(CreateNewComment())
  }
}

const Comment = (props) => {

  const handleChange = (e) => {
    props.createComments(e.target.value)
    console.log(e.target.value)
  }
  
  const handleSubmit = async () => {
    // await axios.post(`/`, props.commentState.newComment)
  }

  useEffect(() => {
    props.fetchComments(props.id)
  }, [props.postState.posts])

  return (
    <div className="comment">
      <div>
        <CommentForm newComment={props.commentState.review} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
      <div>
        {props.commentState.comments?.map((comment) => (
          <ul key={comment._id}>
            <p>{comment.review}</p>
          </ul>
        ))}
        </div>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)