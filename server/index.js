const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { UserModel } = require('./models/users')
// import { movieModel } from './movies.js';
const app = express()
app.use(cors())
app.use(express.json())


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/moviedb")
  console.log("db connect");
}

// for register detalis
app.post('/register', async (req, res) => {
  let User = new UserModel();
  User.email = req.body.email;
  User.password = req.body.pass;
  const doc = await User.save();
  console.log(doc)
  res.json(doc)
})



// for login detalis
app.post('/login', async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      console.log("user find"); 
      
      if (user.password === pass) {
        res.json("success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});


// for demo
app.get('/connect', async (req, res) => {
  res.send("hello")
})



// for fetch all movies end point

// app.get('/allmovies', async (req, res) => {

//   try {
//     const movies = await movieModel.find();
//     res.json(movies);
//   }
//   catch (error) {
//     console.error('Error fetching movies:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// })






// for movies uplode

// app.post("/uploade", async (req, res) => {
//   let moviedata = new movieModel();
//   moviedata.moviePoster = req.body.poster;
//   moviedata.movieTrailer = req.body.trailer;
//   moviedata.movieTitle = req.body.title;
//   moviedata.movieYear = req.body.year;
//   moviedata.movieDescription = req.body.description;
//   moviedata.movieCategory = req.body.category;
//   moviedata.movieCast = req.body.cast;
//   moviedata.movieRating = req.body.rating;
//   const doc = await moviedata.save();
//   res.send(doc);
//   console.log(doc)
// })




app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});