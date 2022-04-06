const CommentForm = (props) => {

  return (
    <div>
      <form>
        <textarea rows="3"
        placeholder="Leave a Review Here"
        value={props.newComment}
        onChange={props.handleChange}>
        </textarea>
        <button type="submit" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm