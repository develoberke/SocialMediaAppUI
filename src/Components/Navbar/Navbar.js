import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";


const Navbar = () => {
    return <AppBar position="static">
        <Container maxWidth="x1">
            <Toolbar disableGutters>
                <Typography 
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr:2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    SocialMedia
                </Typography>             
            </Toolbar>       
        </Container>
    </AppBar>
}

export default Navbar;