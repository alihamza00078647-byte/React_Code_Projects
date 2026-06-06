import { IoIosClose } from "react-icons/io";
import { PostListContext } from "../store/PostList";
import { useContext } from "react";
import "../App.css";


function PostCard({post}) {
  const {deletePost} = useContext(PostListContext);



  return (
    <>
      <div className="card PostCard" style={{width: "22rem"}}>
        <button className="deleteBtn" onClick={() => deletePost(post.Id) }> < IoIosClose /></button>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.body}
          </p>
            <div className="tags">
              {(post.tags).map(tag => (
                <p className="btn btn-primary">{tag}</p>
              ))}
            </div>
            <div className="btn btn-success reactions">
              {post.reactions} people Reacted on your Post.
            </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
