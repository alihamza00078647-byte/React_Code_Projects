import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList";




function CreatePost() {
  const {addPost} = useContext(PostListContext);

    let userIdElement = useRef();
    let titleElement = useRef();
    let bodyElement = useRef();
    let tagsElement = useRef();
    let reactionsElement = useRef();



    function handleOnSubmit(event) {
      event.preventDefault();
      let userId = userIdElement.current.value;
      let title = titleElement.current.value;
      let body = bodyElement.current.value;
      let tags = tagsElement.current.value;
      let reactions = reactionsElement.current.value;
      
      // console.log(userId, title, body, tags, reactions);
      addPost(userId, title, body, tags, reactions);
    }


  return (
    <form onSubmit={handleOnSubmit}>
      {/* This is user-Id of Post */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id :
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter user Id here ..."
        />
      </div>

      {/* This is Title Area of Post */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title :
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title here ..."
        />
      </div>

      {/* This is the Tags Area */}
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          TAGS :
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags here with Spaces..."
        />
      </div>

      {/* This is the Reactions Area */}
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions :
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Enter reactions here..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content :
        </label>
        <textarea
          ref={bodyElement}
          className="form-control textarea"
          id="body"
          placeholder="Add Post Content here....."
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>

    </form>
  );
}

export default CreatePost;
