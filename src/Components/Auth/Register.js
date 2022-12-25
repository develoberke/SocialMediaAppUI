import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";



const Register = () => {
    const dispatch = useDispatch();
    return <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent={"center"} margin="auto" marginTop={5} padding={3}>
        <Typography variant="h4" textAlign={"center"} padding={3}>Sign up</Typography>
        <TextField margin="normal" type={"email"} variant="outlined" placeholder="Email" fullWidth/>
        <TextField margin="normal" type={"password"} variant="outlined" placeholder="Password" fullWidth/>
        <Button variant="contained" color="warning" sx={{marginTop:3}}>Submit</Button>
    </Box>
}

export default Register;