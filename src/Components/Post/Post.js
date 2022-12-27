import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "../../Libs/api"


const Post = ({post}) => {
    
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const dataFetch = async () => {
            const response = await axios.get(`/profiles/${post.profileId}`)
            if(response.status == 200){
                setProfile(response.data);
            }
        }

        dataFetch();
    }, [post])
    return (
    <Box sx={{
        boxShadow:3,
        margin:{
            lg:10,
            md:5,
            xs:1,
        },
    }}>
        <Box display="flex" alignItems={"center"} sx={{
            boxShadow:1,
            padding:3,
        }}>
            {profile ? 
            <>
                <img src={profile.picture}/>
                <Typography>{profile.firstName} {profile.lastName}</Typography> 
            </>
            : <></>}
        </Box>
        <Box display="flex" flexDirection={"column"} alignItems="flex-start" sx={{padding:2}}>
            <Typography fontSize={25} sx={{marginBottom:4}}>{post.title}</Typography>
            <Typography>{post.text}</Typography>
        </Box>
        
    </Box>)
}

export default Post;