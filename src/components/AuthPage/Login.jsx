// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { useAuth } from './hook/useAuth';
import { useNavigate } from 'react-router-dom';
import Logo from '@root/assets/logo.png';
import { authAPIs } from '../../service';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.facebook.com/viet.brand.1"
      >
        suyGroup
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { setIsLogged } = useAuth();

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)

  const handleSubmit = async (
    event,
  ) => {
    setIsLogin(true)
    event.preventDefault();

    // login login
    const data = new FormData(
      event.currentTarget,
    );
    const body = {
      email: data.get('email'),
      password: data.get('password'),
    };
    try {
      const res =
        await authAPIs.login(body);
      if (res.data.EC === 200) {
        const user = res.data.DT;
        // console.log(user);
        // save local storage
        localStorage.setItem(
          'accessToken',
          user.accessToken,
        );
        localStorage.setItem(
          'user',
          JSON.stringify({
            id: user.id,
            avatar: user.avatar,
            email: user.email,
            userName: user.userName,
            fullname: user.fullname,
            _id: user._id
          }),
        );
        navigate('/shop');
      }
    } catch (error) {
      console.log(error);
    }
    setIsLogged(true);
    setIsLogin(false)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="logo" />
          <Typography
            component="h1"
            variant="h5"
          >
            Đăng nhập
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLogin}
            >
              {isLogin ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Box>
          <div>
            <h3 className='font-semibold'>Account DEMO</h3>
            <div>
              <span className='font-semibold'>Email:</span>
              <span>  user0@gmail.com</span>
            </div>
            <div>
              <span className='font-semibold'>Password:</span>
              <span>  123456</span>
            </div>
          </div>
        </Box>
        <Copyright
          sx={{ mt: 8, mb: 4 }}
        />
      </Container>
    </ThemeProvider>
  );
}
