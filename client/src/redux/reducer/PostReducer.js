import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../action/types";

const PostReducer = (post=[], action) => {
     switch (action.type) {
          case FETCH_ALL:
               return action.payload;
          case CREATE:
               return [...post, action.payload];
          case UPDATE:
               return post.map((p) => (p._id === action.payload._id ? action.payload : p));
          case LIKE:
               return post.map((p) => (p._id === action.payload._id ? action.payload : p));
          case DELETE:
               return post.filter((p) =>p._id !== action.payload);
          default:
               return post;
     }
};
export default PostReducer;
