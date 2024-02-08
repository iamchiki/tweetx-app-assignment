import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import CustomBtnComponent from "../components/UI/CustomBtnComponent";
import { Alert, Snackbar } from "@mui/material";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      navigate("/home");
    } catch (error) {
      setOpen(true);
      setErrMsg(error.message);
      navigate("/login");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}>
          {errMsg}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={signinHandler} sx={{ mt: 1 }}>
          <TextField
            novli
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
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
            inputRef={passwordRef}
          />
          <CustomBtnComponent
            sx={{
              mt: 3,
              mb: 2,
            }}
            type="submit"
            variant="contained"
            fullWidth={true}>
            Sign In
          </CustomBtnComponent>
          <Grid container>
            <Grid item>
              <Link
                component={RouterLink}
                to="/register"
                variant="body2"
                sx={{ color: "#ef4c4a" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
