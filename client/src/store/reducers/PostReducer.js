const { GET_POSTS } = require('../types')

const initialState = {
  posts: [],
  newPost: {
    author: "",
    description: "",
    title: "",
    likes: 0
  }
}

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer