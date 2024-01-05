import axios from "axios"

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
      <p><img src={props.post.image} /> </p>
      <form onSubmit={handleSubmit}>
        <div>
          Text: <input type="text" name="text" defaultValue={props.post.text} />
        </div>
        <div>
          Image: <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={handleClick}>Destroy Post</button>
    </div>
  );
}
