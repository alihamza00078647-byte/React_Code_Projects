import { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostList";




function PostContainer() {

    const {PostList} = useContext(PostListContext);


    return (
        <>
            {PostList.map(post => (
                <PostCard key={post.Id} post={post} />
            ))}
        </>
    )
}



export default PostContainer;