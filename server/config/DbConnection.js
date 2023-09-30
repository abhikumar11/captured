import mongoose from "mongoose";

const connectDb = () => {
     mongoose.connect("mongodb://localhost:27017/captured", {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          })
          .then(() => console.log("connection established"))
          .catch((err) => console.log(err.message));
    mongoose.set('useFindAndModify', false);
};

export default connectDb;
