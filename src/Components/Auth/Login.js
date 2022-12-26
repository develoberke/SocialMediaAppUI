import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../Store/securitySlice";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(8).required(),
  });
  
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
          username: "",
          password: "",
        },
        resolver: yupResolver(schema),
      });
    const onSubmit = async (formProps) => {
        const { username, password } = formProps;
        if (username && password) {
            dispatch(login(formProps));
        }   
    };

    return <Box display="flex" flexDirection="column" maxWidth={400} alignItems="center" justifyContent={"center"} margin="auto" marginTop={5} padding={3}>
        <Typography variant="h4" textAlign={"center"} padding={3}>Sign in</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    margin="normal"
                    label="Username"
                    placeholder="Username"
                    variant="outlined"
                    fullWidth
                    error={"username" in errors}
                    helperText={errors.username?.message}
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    margin="normal"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    error={"username" in errors}
                    helperText={errors.password?.message}
                    />
                )}
            />
            <Button variant="contained" color="warning" sx={{marginTop:3}} type="submit">Submit</Button>
        </form>
        
    </Box>
}


export default Login;