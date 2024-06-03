import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rhasanur234:2zZIvzXz76j1GpyT@cluster0.ochoajc.mongodb.net/demologin?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default db;
