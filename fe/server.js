const express = require("express");
const app = express();
const mongoose = require("mongoose");
const play = require("./model");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const multer = require("multer");
const middelware = require("./middelware");
const jwt = require("jsonwebtoken");
mongoose
  .connect(
    "mongodb+srv://manojsaikumar:manojsai@ccoding.13uuyk0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db change"))
  .catch(err=>{
    console.log(err)
  });

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, originalname);
  },
});

const upload = multer({ storage });

mongoose.connect(
  "mongodb+srv://manojsaikumar:manojsai@ccoding.13uuyk0.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const imageSchema = new mongoose.Schema({
  price: String,
  title:String,
  picture: Buffer,
  contentType: String,
});

const plant = mongoose.model("plant", imageSchema);

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const image = new plant({
      price: req.body.price,
      title:req.body.title,
      picture: req.file.buffer,
      contentType: req.file.mimetype,
    });
    await image.save();
    res.send("Image uploaded successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server wrong");
  }
});
app.post("/adduser", async (req, res) => {
  const { name, email, mobile, password, confirmpassword } = req.body;
  try {
    const exist = await play.findOne({ email });
    if (exist) {
      return res.status(400).send({ Message: " Register" });
    }
    if (password !== confirmpassword) {
      return res.status(401).send({ Message: "Password Not Match" });
    }

    let newq = await play({
      name,
      email,
      mobile,
      password,
      confirmpassword,
    });
    await newq.save();
    return res.status(200).send("Sucess");
  } catch (err) {
    console.log(err);
  }
  res.status(201).json({ play: play });
});
app.post("/login", async (req, res) => {
  const { email, password, mobile } = req.body;
  try {
    let exist = await play.findOne({ email });
    if (!exist) {
      return res.status(403).send({ Message: "Not Register" });
    }
    if (exist.password !== password) {
      return res.status(401).send({ Message: "Password Not Matched" });
    }
    if (exist.mobile == mobile) {
      return res.status(500).send({ Message: "Mobile existed" });
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "keyu", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/getuser", middelware, async (req, res) => {
  try {
    const exist = await play.findById(req.user.email);
    if (!exist) {
      return res.status(405).send({ Message: "No Token Here" });
    }
    res.json({ exist });
  } catch (err) {
    console.log(err);
  }
});
app.get("/getall", async (req, res) => {
  try {
    let getall = await play.find();
    return res.json(getall);
  } catch (err) {
    console.log(err);
  }
});
app.get("/img", async (req, res) => {
  const allData = await plant.find();
  res.json(allData);
});
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    await play.findByIdAndDelete(req.params.id);
    return res.json(await play.find());
  } catch (err) {
    console.log(err);
  }
});
app.delete("/deleteuserr/:id", async (req, res) => {
    try {
      await plant.findByIdAndDelete(req.params.id);
      return res.json(await plant.find());
    } catch (err) {
      console.log(err);
    }
});
app.put("/putuser/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await play.findByIdAndUpdate(_id, req.body);
    res.send(updateUser);
  } catch (err) {
    console.log(err);
  }
});
app.listen(5000, () => console.log("Loading in port 5000...."));
