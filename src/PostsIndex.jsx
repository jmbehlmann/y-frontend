export function PostsIndex(props) {

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="row">
        {props.posts.map((post) => (
          <div key={post.id}>
            <h2>Text: {post.text}</h2>
            <p><img src={post.image} /></p>
            {/* <p>Id: {post.id}</p> */}
            <button onClick={() => props.onShowPost(post)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
