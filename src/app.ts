// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import User from "./model/user";
// import db from "./db/connection";

// const app = express();
// const port = 5000;

// // Use the cors middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// db();

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("Received registration request:", username, password);
//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       res.status(400).send({ message: "Username already exists" });
//       console.log("Username already exists");
//     } else {
//       const newUser = new User({ username, password });
//       await newUser.save();
//       res.send({ message: "Registration successful", username });
//       console.log("User registered successfully");
//     }
//   } catch (error) {
//     res.status(500).send({ message: "An error occurred", error });
//     console.error("Error during registration:", error);
//   }
// });
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({}, "username password");
//     res.send(users);
//     console.log("User data retrieved successfully");
//   } catch (error) {
//     res.status(500).send({ message: "An error occurred", error });
//     console.error("Error fetching user data:", error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server up and running on port ${port}`);
// });

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model/user";
import db from "./db/connection";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
db();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log("Received registration request:", username, password);
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).send({ message: "Username already exists" });
      console.log("Username already exists");
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      res.send({ message: "Registration successful", username });
      console.log("User registered successfully");
    }
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error });
    console.error("Error during registration:", error);
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, "username password");
    res.send(users);
    console.log("User data retrieved successfully");
  } catch (error) {
    res.status(500).send({ message: "An error occurred", error });
    console.error("Error fetching user data:", error);
  }
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
