import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "../Components/Post/Posts";
import { getAllPosts } from "../Store/postSlice";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return <Box>
        <Grid container>
            <Grid item lg={3} md={2} sm={1} xs={1}> </Grid>
            <Grid item lg={6} md={8} sm={10} xs={10}><Posts/></Grid>
            <Grid item lg={3} md={2} sm={1} xs={1}> </Grid>
        </Grid>
        
    </Box>
}

export default Home;