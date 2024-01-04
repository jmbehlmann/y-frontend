import axios from 'axios'

export function PostsNew(props) {
  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onPostCreate(params)
    event.target.reset()
    console.log('creating post')
    }
    
  return (
    <div id="posts-new">
      <h1>New posts</h1>
      <form onSubmit={createPost}>
        <p>Text: <input name="text" type="text" /></p>
        <p>Image: <input name="image" type="text" /></p>
        <button type="submit">Make new post</button>
        </form>
    </div>
  )
}