import * as api from "../../api";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "./types";
export const getPosts=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload:data});
    }catch(err){
            console.log(err);
    }
        
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}
export const deletePost=(id)=>async(dispatch)=>{
        try {
            await api.deletePost(id);
            dispatch({type:DELETE,payload:id});
        } catch (err) {
            console.log(err);
        }
}
export const updatePost=(id,post)=>async(dispatch)=>{
        try {
            console.log("Update post");
          const {data}=await api.updatePost(id,post);
          dispatch({type:UPDATE,payload:data});
        } catch (error) {
            console.log(error);
        }
}
export const likePost=(id)=>async(dispatch)=>{
            try {
                const {data}=await api.likePost(id);
                dispatch({type:LIKE,payload:data});
            } catch (error) {
                console.log(error);
                
            }
}