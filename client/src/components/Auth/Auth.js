import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./style";
import {signIn,signUp} from "../../redux/action/UserAction";
import {Avatar,Button,Container,Grid,Paper,Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {GoogleLogin} from "react-google-login";
import Input from "./Input";
import Icon from "./icon";

const Auth = () => {
     const initialState = {firstName:"",lastName:"",email:"",password:"",confirmPassword:""};
     const [showPassword, setShowPassword] = useState(false);
     const [isSignUp, setIsSignUp] = useState(false);
     const [formData,setFormData] = useState(initialState);
     const dispatch=useDispatch();
     const classes = useStyles();
     const handleSubmit = (e) => {
          e.preventDefault();
         if(isSignUp) {
          dispatch()
         }
         else{

         }
     };
     const handleChange = (e) => {
               setFormData({...formData,[e.target.name]:e.target.value});
               
     };
     const handleShowPassword = () => {
          setShowPassword((prev) => !prev);
     };
     const switchForm = () => {
          setIsSignUp((prev) => !prev);
     };
     const googleSuccess = async(res) => {
          console.log(res);
     };
     const googleFailure = (err) => {
          console.log(err);
     };
     return (
          <Container component="main" maxWidth="xs">
               <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                         <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                         {isSignUp ? "Sign Up" : "Login"}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                         <Grid container spacing={2}>
                              {isSignUp && (
                                   <>
                                        <Input
                                             name="firstName"
                                             label="First Name"
                                             handleChange={handleChange}
                                             autoFocus
                                             half={6}
                                        />
                                        <Input
                                             name="lastName"
                                             label="Last Name"
                                             handleChange={handleChange}
                                             half={6}
                                        />
                                   </>
                              )}
                              <Input
                                   name="email"
                                   label="Email Address"
                                   handleChange={handleChange}
                                   type="email"
                              />
                              <Input
                                   name="password"
                                   label="Password"
                                   handleChange={handleChange}
                                   type={showPassword ? "text" : "password"}
                                   handleShowPassword={handleShowPassword}
                              />
                              {isSignUp && (
                                   <Input
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        handleChange={handleChange}
                                        type="password"
                                   />
                              )}
                         </Grid>
                         {/* <GoogleLogin
                         clientId="413795579840-nq34jm97d3fkcmdtqptpkmgq0fajm3aj.apps.googleusercontent.com"
                         render={(prev)=>(
                              <Button className={classes.googleButton}
                                   color="primary"
                                   fullWidth
                                   onClick={prev.onClick}
                                   disabled={prev.disabled}
                                   startIcon={<Icon/>}
                                   variant="contained"
                              >
                                   Google Sign In
                              </Button>
                         )}
                         onSuccess={googleSuccess}
                         onFailure={googleFailure}
                         cookiePolicy="single_host_origin"
                         /> */}
                         <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                         >
                              {isSignUp ? "Sign Up" : "Login"}
                         </Button>
                         <Grid container justifyContent="flex-end">
                              <Grid item>
                                   <Button onClick={switchForm}>
                                        {isSignUp
                                             ? "Already have an account? Sign In"
                                             : "Don't have an account Sign Up"}
                                   </Button>
                              </Grid>
                         </Grid>
                    </form>
               </Paper>
          </Container>
     );
};

export default Auth;
