import { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostList";
import WelcomeMsg from "./WelcomeMsg";




function PostContainer() {

    const {PostList, addInitialPosts} = useContext(PostListContext);

    const handleDummyData = async () => {
        const res = await fetch('https://dummyjson.com/posts');
        const data = await res.json();
        // console.log(data);
        
        addInitialPosts(data.posts);
        // fetch('https://dummyjson.com/posts')
        // .then(res => res.json())
        // .then(console.log)
    }


    // console.log(PostList);

    return (
        <>
            {PostList.length === 0 && <WelcomeMsg DummyData={handleDummyData} />}

            {PostList.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    )
}



export default PostContainer;