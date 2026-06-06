import { createContext, useReducer} from "react";

export const PostListContext =  createContext({
    PostList : [],
    addPost : () => {},
    addInitialPosts : () => {},
    deletePost : () => {},
});

function PostListReducer(currValue, action) {

    let NewPostValue = currValue;

    if (action.type === "NEW_POST") {
        NewPostValue = [action.payload, ...currValue];
    } else if (action.type === "DELETE_POST") {
        NewPostValue = currValue.filter(post => post.Id !== action.payload.postId);
    }

    return NewPostValue;
}


const PostListProvider = ({children}) => {
    let [PostList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);


    const addPost = (userId, title, body, tags, reactions) => {
        const AddNewPost = {
            type : "NEW_POST",
            payload : {
                Id : Date.now(),
                userId : userId, 
                title : title,
                body : body,
                tags : tags,
                reactions: reactions
            }
        }
        dispatchPostList(AddNewPost);
    }

    const deletePost = (postId) => {
        // console.log(postId);
        const deleteNewPost = {
            type : "DELETE_POST",
            payload : {
                postId : postId
            }
        }
        dispatchPostList(deleteNewPost);
    }




    return (
        <PostListContext.Provider value={{PostList, addPost, deletePost}}>
            {children}
        </PostListContext.Provider>
    )


}

const DEFAULT_POST_LIST = [
    {
        Id : "1",
        userId : "user-890", 
        title : "Mera Card",
        body : "The posts endpoint offers a dataset of sample blog post data, including details.",
        reactions: "123",
        tags : ["KSA", "B.Tech", "Journey"]
    },
    {
        Id : "2",
        userId : "user-90", 
        title : "Ok OK ho Ja",
        body : "The posts endpoint offers a dataset of sample blog post data, including details.",
        tags : ["Korea", "Post", "Journey", "Meri", "OK"],
        reactions: "677"
    }
]


export default PostListProvider;