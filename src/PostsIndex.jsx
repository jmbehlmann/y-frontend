export function PostsIndex(props) {

  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>Text: {post.text}</h2>
          <p>Image: {post.image}</p>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
