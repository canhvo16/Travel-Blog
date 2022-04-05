import { GetPosts, GetComments } from "../../services/BlogService"
import { GET_POSTS, GET_COMMENTS } from '../types'

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

export const LoadComments = () => {
    return async (dispatch) => {
        try {
            const comments = await GetComments()
            dispatch({
                type: GET_COMMENTS,
                payload: comments
            })
        } catch (error) {
            throw error
        }
    }
}

