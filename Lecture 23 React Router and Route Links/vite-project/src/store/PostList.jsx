import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

function PostListReducer(currValue, action) {
  let NewPostValue = currValue;

  if (action.type === "NEW_POST") {
    NewPostValue = [action.payload.post, ...currValue];
  } else if (action.type === "DELETE_POST") {
    NewPostValue = currValue.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "NEW_INITIAL_POSTS") {
    NewPostValue = action.payload.posts;
  }

  return NewPostValue;
}

const PostListProvider = ({ children }) => {
  let [PostList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
    console.log(post);
    const AddNewPost = {
      type: "NEW_POST",
      payload: {
        post: post,
      },
    };
    dispatchPostList(AddNewPost);
  };

  const addInitialPosts = (posts) => {
    const AddNewPosts = {
      type: "NEW_INITIAL_POSTS",
      payload: {
        posts,
      },
    };
    dispatchPostList(AddNewPosts);
  };

  const deletePost = (postId) => {
    const deleteNewPost = {
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(deleteNewPost);
  };

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ PostList, addPost, deletePost, fetching }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
