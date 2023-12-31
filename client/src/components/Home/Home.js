import { Container, Grid, Grow } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Forms/Form";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/action/PostAction";
const Home = () => {
     const classes = useStyles();
     const dispatch = useDispatch();
     const [currentId, setCurrentId] = useState(null);
     useEffect(() => {
          dispatch(getPosts());
     }, [currentId, dispatch]);
     return (
          <Grow in>
               <Container>
                    <Grid
                         className={classes.mainContainer}
                         container
                         justifyContent="space-between"
                         alignItems="strech"
                         spacing={3}
                    >
                         <Grid item xs={12} sm={7}>
                              <Posts setCurrentId={setCurrentId} />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                              <Form
                                   currentId={currentId}
                                   setCurrentId={setCurrentId}
                              />
                         </Grid>
                    </Grid>
               </Container>
          </Grow>
     );
};

export default Home;
