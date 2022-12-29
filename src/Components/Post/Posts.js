import { useSelector } from "react-redux";
import Post from "./Post";
import { Box } from "@mui/material";

const Posts = () => {
    const posts = useSelector((state) => state.post.posts)

    return <Box>
        {posts ? posts.map((post) => {
            return <Post key={post.id} post={post}/>
        }): <></>}
    </Box>
}


export default Posts;