const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");

const app = express();

// Set 'views' as the folder to look for HTML files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



// app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname));

// Configure Express middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/start', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'start.html'));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'quiz.html'));
});

app.get('/end', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'end.html'));
});




app.get('/Uranus', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Uranus.html'));
});

app.get('/Sun', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Sun.html'));
});

app.get('/venus', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'venus.html'));
});

app.get('/Earth', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Earth.html'));
});

app.get('/jupiter', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'jupiter.html'));
});

app.get('/Mars', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Mars.html'));
});

app.get('/Mercury', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Mercury.html'));
});

app.get('/Moon', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Moon.html'));
});

app.get('/Neptune', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Neptune.html'));
});

app.get('/Pluto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Pluto.html'));
});

app.get('/Saturn', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Saturn.html'));
});

app.get('/space', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'space.html'));
});












// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/code_sangam", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

// Set up the EJS template engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.static(__dirname));

// // Configure Express middleware
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "public")));
// app.set('public', express.static(path.join(__dirname, 'public')));

// Define the schema and model for the contact form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // subject: { type: String, required: true },
    message: { type: String, required: true },
  
});

const Contact3 = mongoose.model("Contact3", contactSchema);

// Routes
// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/start", (req, res) => {
//   res.render("start");
// });

// app.get("/Uranus", (req, res) => {
//   res.render("Uranus");
// });

// app.get("/Venus", (req, res) => {
//   res.render("Venus");
// });

app.post("/", async (req, res) => {
  try {
    const newContact = new Contact3({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
        // message: req.body.message,
      
    });

    await newContact.save();
    res.render("index");
  } catch (error) {
    console.error("Error saving contact form data:", error);
    res.render("error");
  }
});

// Start the server

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

