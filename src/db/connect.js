import mongoose from "mongoose";

const connect = async () => {
    const PORT = process.env.MONGO_URI
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(PORT, options);
        console.log("Connected to MongoDB successfully!");
        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB connection disconnected!");

        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

export default connect;
