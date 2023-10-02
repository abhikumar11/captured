import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
export const getPosts=async(req,res)=>{
    try {
       const postmessage= await PostMessage.find();
       console.log(postmessage);
       return res.status(200).json(postmessage);
    } catch (error) {
        return res.status(404).json(error.message);
    }
}
export const createPosts=async(req,res)=>{
    const post=req.body;
    console.log(post);
    const newPost=new PostMessage(post);
    try {
            await newPost.save();
            return res.status(200).json(newPost);
    } catch (error) {
        return res.status(404).json(error);
    }
}
export const updatePost=async(req,res)=>{
    const {id}=req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
   await PostMessage.findByIdAndUpdate(id,updatedPost,{new:true});
   res.json(updatedPost);
}
export const deletePost=async(req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
export const likePost=async(req,res)=>{
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post=await PostMessage.findById(id);
    const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);
}