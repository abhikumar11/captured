import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import useStyles from "./style";
const Navbar = () => {
     const classes = useStyles();
     const user = null;
     return (
          <AppBar className={classes.appBar} position="static" color="inherit">
               <div>
                    <Typography
                         className={classes.heading}
                         variant="h2"
                         align="center"
                         component={Link}
                         to="/"
                    >
                         Captured
                         <img
                              src="./images/capture.png"
                              className={classes.image}
                              alt=""
                              height="60"
                         />
                    </Typography>
               </div>
               <Toolbar className={classes.toolbar}>
                    {user ? (
                         <div className={classes.profile}>
                              <Avatar
                                   className={classes.purple}
                                   alt={user.result.name}
                                   src={user.result.imageUrl}
                              >
                                   {user.result.name.charAt(0)}
                              </Avatar>
                              <Typography
                                   className={classes.userName}
                                   variant="h6"
                              >
                                   {user.result.name}
                              </Typography>
                              <Button
                                   variant="contained"
                                   className={classes.logout}
                                   color="secondary"
                              >
                                   Logout
                              </Button>
                         </div>
                    ) : (
                         <Button
                              component={Link}
                              to="/auth"
                              variant="contained"
                              className={classes.logout}
                              color="primary"
                         >
                              Login
                         </Button>
                    )}
               </Toolbar>
          </AppBar>
     );
};

export default Navbar;
