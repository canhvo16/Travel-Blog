const { GET_POSTS, NEW_AUTHOR_POST, NEW_DESCRIPTION_POST, NEW_TITLE_POST } = require('../types')

const initialState = {
  posts: [],
  
  author: "",
  description: "",
  title: "",
}

const PostReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case NEW_AUTHOR_POST:
      return { ...state, author: action.payload }
    case NEW_DESCRIPTION_POST:
      return { ...state, description: action.payload}
    case NEW_TITLE_POST:
     return { ...state, title: action.payload}
    default:
      return { ...state }
  }
}

export default PostReducer