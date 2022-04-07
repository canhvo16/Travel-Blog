const CommentForm = (props) => {

  return (
    <div>
      <form className="commentForm">
        <textarea className="textArea" rows="3"
        placeholder="Leave a Review Here"
        value={props.newComment}
        onChange={props.handleChange}>
        </textarea>
        <button className="submit" type="submit" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default CommentForm

