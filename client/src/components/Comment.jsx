import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments } from "../store/actions/BlogActions"

const mapStateToProps = ({ commentState, postState }) => {
  return { commentState, postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id))
  }
}

const Comment = (props) => {

  useEffect(() => {
    props.fetchComments(props.id)
  }, [props.postState.posts])

  return (
    <div>
      {props.commentState.comments?.map((comment) => (
        <ul key={comment._id}>
          <p>{comment.review}</p>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)