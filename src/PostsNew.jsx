import axios from 'axios'

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params, () => event.target.reset());
    };

  return (
    <div id="posts-new">
      <h1>New posts</h1>
      <form onSubmit={handleSubmit}>
        <p>Text: <input name="text" type="text" /></p>
        <p>Image: <input name="image" type="text" /></p>
        <button type="submit">Make new post</button>
        </form>
    </div>
  )
}
