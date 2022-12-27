import { Box, Grid } from "@mui/material";
import Posts from "../Components/Post/Posts";


const Home = () => {
    return <Box>
        <Grid container>
            <Grid item lg={3} md={2} sm={1} xs={1}> </Grid>
            <Grid item lg={6} md={8} sm={10} xs={10}><Posts/></Grid>
            <Grid item lg={3} md={2} sm={1} xs={1}> </Grid>
        </Grid>
        
    </Box>
}

export default Home;