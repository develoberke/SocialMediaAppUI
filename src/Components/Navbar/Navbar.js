import { AppBar, Toolbar, Typography, Grid, Tab, Tabs} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = ({links}) => {
    const isAuthenticated = useSelector((state) => state.security.isAuthenticated)
    const location = useLocation();
    const [tab, setTab] = useState(location?.pathname);
    //(links.filter((e) => e.path === "/signin").length > 0 ? "/signin" : "/signup")

    useEffect(() => {
        setTab(links[0].path);
    }, [links, isAuthenticated])
    const navigate = useNavigate();

    const handleChange = (event, value) => {
        event.preventDefault();
        setTab(value);
        navigate(value);
    }
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
                        <Tabs indicatorColor="secondary" textColor="inherit" value={tab} onChange={handleChange}>
                            {links.map((link, index) => (<Tab key={index} label={link.name} component="a" href={link.path} value={link.path}/>))}
                        </Tabs>
                    </Grid>
                </Grid>           
            </Toolbar>       
        </AppBar>
    </div>
}

export default Navbar;