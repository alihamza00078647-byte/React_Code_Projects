import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

function PostListReducer(currValue, action) {
  let NewPostValue = currValue;

  if (action.type === "NEW_POST") {
    NewPostValue = [action.payload, ...currValue];
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

  const addPost = (userId, title, body, tags, reactions) => {
    const AddNewPost = {
      type: "NEW_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: title,
        body: body,
        tags: tags.trim().split(" "),
        reactions: reactions,
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

  return (
    <PostListContext.Provider
      value={{ PostList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
