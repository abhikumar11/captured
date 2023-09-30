import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Form";
import useStyles from "./style";
import { useDispatch,useSelector } from "react-redux";
import {getPosts} from "./redux/action/PostAction";
const App = () => {
  const classes=useStyles();
  const dispatch=useDispatch();
  const [currentId,setCurrentId]=useState(null);
  useEffect(() => {
     dispatch(getPosts());
  }, [currentId,dispatch])
  
     return (
          <Container maxWidth="lg">
               <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                         Captured
                         <img src="./images/capture.png" className={classes.image} alt="" height="60" />
                    </Typography>
               </AppBar>
               <Grow in>
                    <Container>
                         <Grid
                              container
                              justifyContent="space-between"
                              alignItems="strech"
                              spacing={3}
                         >
                          <Grid item xs={12} sm={7}>
                              <Posts setCurrentId={setCurrentId}/>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                         </Grid>
                    </Container>
               </Grow>
          </Container>
     );
};

export default App;
