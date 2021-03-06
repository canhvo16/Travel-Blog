// import { post } from '../../../../models/Review'

const { GET_COMMENTS, CREATE_COMMENT } = require('../types')

const initialState = {
  comments: [],
  // post: '',
  review: '',
  likes: 0
}

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case CREATE_COMMENT:
      return { ...state, review: action.payload }
    default:
      return { ...state }
  }
}

export default CommentReducer
