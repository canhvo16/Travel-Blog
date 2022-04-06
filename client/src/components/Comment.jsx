import { connect } from "react-redux"
import { useEffect } from "react"
import { LoadComments } from "../store/actions/BlogActions"

const mapStateToProps = ({ commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadComments())
  }
}

const Comment = ({ props, id }) => {
  return (
    <div>Comment</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)