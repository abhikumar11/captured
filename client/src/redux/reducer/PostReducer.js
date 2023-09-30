const initialState = {
     post: [],
};
const PostReducer = (post=[], action) => {
     switch (action.type) {
          case "FETCH_ALL":
               return action.payload;
          case "CREATE":
               return [...post, action.payload];
          case "UPDATE":
               return post.map((p) => (p._id === action.payload._id ? action.payload : p));
          default:
               return post;
     }
};
export default PostReducer;
