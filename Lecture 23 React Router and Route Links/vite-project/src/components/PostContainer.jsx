import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostList";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

function PostContainer() {
  const { PostList, fetching } = useContext(PostListContext);



  return (
    <>
      {fetching && < LoadingSpinner />}
      {!fetching && PostList.length === 0 && <WelcomeMsg />}

      {!fetching && PostList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostContainer;
