import { connect } from 'react-redux'
import axios from 'axios'
// import { CreatePost } from '../store/actions/TodoActions';
import { NewPost } from '../store/actions/BlogActions'

const CreatePost = (props) => {

    const handleChange = (event) => {
        props.newPost(event.target.name, event.target.value)
    }

    const handlesubmit = async (event) => {
        const newPost = {
            author: props.postState.author,
            description: props.postState.description,
            title: props.postState.title,
            likes: 0
          }
        //event.preventDefault()
        console.log(newPost)
        // await axios.post("URL", newPost)
    }

    return (
        <div>
            <form>
                <input 
                    className='input-author'
                    type="text"
                    name="author"
                    value={props.postState.author}
                    placeholder="Your Name"
                    onChange={(event) => handleChange(event)}
                    />
                <input 
                    type="text"
                    name="title"
                    value={props.postState.newPost.title}
                    onChange={(event) => handleChange(event)}
                    />
                <input 
                    type="text"
                    name="description"
                    value={props.postState.newPost.description}
                    onChange={(event) => handleChange(event)}
                    />
                <button
                    type="submit"
                    onClick={handlesubmit}>Create Post</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        postState: state.postState
    }
}

const mapActionToProps = (dispatch) => {
    return {
        createPost: (formName, formValue) => dispatch(CreatePost(formName, formValue)),
    }
}

/*
export const CreatePost = (formName, formValue) => ({
    const property ={
        name: formName
        value: formValue
    }
    return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: NEW_POST,
        payload: property
      })
    } catch (error) {
      throw error
    }
  }
})
// Add to the post reducer switch case
case ADD_TODO:
    return { ...state, newPost: [...state.newPost, {action.payload.name: action.payload.value}]}
*/
export default connect(mapStateToProps, mapActionToProps)(CreatePost);