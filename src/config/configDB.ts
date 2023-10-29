import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.mongo_url!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        " MongoDB connection error make sure the mongodb is running "
      );
      console.log("ERROR : " + err);
      process.exit(); 
    });
  } catch (error) {
    console.log("something is wrong!");
    console.log("ERROR : " + error);
  }
}
