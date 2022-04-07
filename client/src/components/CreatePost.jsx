import { connect } from 'react-redux'
import Client from '../services'
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
        await Client.post('/newPost', newPost)
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
                    <br/>
                <input 
                    className='input-title'
                    type="text"
                    name="title"
                    value={props.postState.title}
                    placeholder="Title of post"
                    onChange={(event) => handleChange(event)}
                    />
                    <br/>
                    
                <input 
                    className='input-description'
                    type="text"
                    name="description"
                    value={props.postState.description}
                    placeholder="Description"
                    onChange={(event) => handleChange(event)}
                    />
                    <br/>
                <button
                    type="submit"
                    onClick={handlesubmit}>Create Post</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({postState}) => {
    return {
        postState
    }
}

const mapActionToProps = (dispatch) => {
    return {
        newPost: (formName, formValue) => dispatch(NewPost(formName, formValue)),
    }
}

export default connect(mapStateToProps, mapActionToProps)(CreatePost);