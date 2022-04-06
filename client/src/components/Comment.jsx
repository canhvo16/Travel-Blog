import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments, CreateNewComment } from "../store/actions/BlogActions"

const mapStateToProps = ({ commentState, postState }) => {
  return { commentState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id))
  }
}

const Comment = (props) => {

  const handleChange = (e) => {
    props.createNewComment(e.target.value)
  }
  
  const handleSubmit = (e) => {
    props.createNewComment(props.commentState.newComment)
  }

  useEffect(() => {
    props.fetchComments(props.id)
  }, [props.postState.posts])

  return (
    <div>
      <div>
        <CommentForm newComment={props.commentState.newComment} handleChange={handleChange} handleSubmit={handleSubmit}/>
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