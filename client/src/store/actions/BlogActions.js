import { GetPosts, GetComments } from '../../services/BlogService'
import { GET_POSTS, GET_COMMENTS, CREATE_COMMENT, NEW_AUTHOR_POST, NEW_DESCRIPTION_POST, NEW_TITLE_POST } from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await GetComments(id)
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const NewPost = (formName, formValue) => {
  let NEW_POST = ""
  if(formName === "author"){
    NEW_POST = NEW_AUTHOR_POST
  }else if(formName === "description"){
    NEW_POST = NEW_DESCRIPTION_POST
  }else if(formName === "title"){
    NEW_POST = NEW_TITLE_POST
  }

  return async (dispatch) => {
  try {
    dispatch({
      type: NEW_POST,
      payload: formValue
  })
    } catch (error) {
      throw error
    }
  }
}

export const CreateNewComment = (formValue) => ({
  type: CREATE_COMMENT,
  payload: formValue
})
