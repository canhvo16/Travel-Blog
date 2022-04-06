import { connect } from 'react-redux'
import axios from 'axios'
// import { CreatePost } from '../store/actions/TodoActions';

function CreatePost(props) {

    const handleChange = (event) => {
        props.createPost(event.target.name, event.target.value)
    }

    const handlesubmit = async (event) => {
        event.preventDefault()
        // await axios.post("URL", props.postState.newPost)
    }

    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="author"
                    value={props.postState.newPost.author}
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
        formName: formValue
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
    return { ...state, newPost: [...state.newPost, {action.payload[0]: action.payload.formName}]}
*/
export default connect(mapStateToProps, mapActionToProps)(CreatePost);