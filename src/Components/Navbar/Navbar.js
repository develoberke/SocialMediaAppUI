import { AppBar, Toolbar, Typography, Grid, Tab, Tabs} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Navbar = ({links}) => {
    const location = useLocation();
    const [tab, setTab] = useState(location?.pathname);
    return <div>
        <AppBar position="static" sx={{backgroundImage: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"}}>
            <Toolbar>
                <Grid container sx={{placeItems:"center"}}>
                    <Grid item xs={2}>
                            <Typography 
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr:2,
                                display: "flex",
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SocialMedia
                        </Typography>  
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={location?.pathname}>
                            {links.map((link, index) => (<Tab key={index} label={link.name} component="a" href={link.path} value={link.path}/>))}
                        </Tabs>
                    </Grid>
                </Grid>           
            </Toolbar>       
        </AppBar>
    </div>
}

export default Navbar;