import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostList";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

function PostContainer() {
  const { PostList, addInitialPosts } = useContext(PostListContext);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
    });
    // Run Only When Component Will Die
    return () => {
        console.log("Cleaning Up Method...");
        // Will Clean The API call Auto..
        controller.abort();
    }
  }, []);



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
