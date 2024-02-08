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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import CustomBtnComponent from "../components/UI/CustomBtnComponent";
import { Alert, Snackbar } from "@mui/material";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  // to navigate to other pages
  const navigate = useNavigate();
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      if (passwordRef.current.value === confirmPasswordRef.current.value) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );

        // creating  user list in db after new signup
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: nameRef.current.value,
          email: emailRef.current.value,
          posts: [],
          followers: [],
          following: [],
        });
        // navigating to home page after creating new user
        navigate("/home");
      } else {
        throw new Error("Password does not match");
      }
    } catch (error) {
      console.dir(error);
      setOpen(true);
      setErrMsg(error.message);
      navigate("/register");
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={signupHandler} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                inputRef={nameRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={passwordRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                inputRef={confirmPasswordRef}
              />
            </Grid>
          </Grid>
          <CustomBtnComponent
            sx={{
              mt: 3,
              mb: 2,
            }}
            type="submit"
            variant="contained"
            fullWidth={true}>
            Sign Up
          </CustomBtnComponent>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ color: "#ef4c4a" }}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
