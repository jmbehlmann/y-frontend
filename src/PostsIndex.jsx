export function PostsIndex(props) {

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="col">
        {props.posts.map((post) => (
           <div class="col-sm-4 mx-auto">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">{post.id}</h5>
               <p class="card-text">{post.text}.</p>
               <img src={post.image} class="card-img-top" alt="..."></img>

               <button class="btn btn-primary" onClick={() => props.onShowPost(post)}>More info</button>
             </div>
           </div>
           <br />
         </div>

       ))}

     </div>      

   </div>
 );
}
