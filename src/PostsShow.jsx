export function PostsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h1>Post</h1>
      <p>Text: {props.post.text}</p>
      <p>Image: {props.post.image}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Text: <input defaultValue={props.post.text} name="text" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={handleClick}>Destroy Post</button>
    </div>
  );
}
