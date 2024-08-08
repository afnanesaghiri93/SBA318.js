/*  Example 1  */
const express = require('express');
const send = require('send');
const app = express();
const PORT = 3000;
const path = require('path')
//Middleware to parse JSON 
app.use(express.json());
// // Middleware to look at our request.body object
app.use(express.urlencoded({extended: false}))
// Server run on Port 3000 
console.log('I am running');
app.listen(PORT, ()=> {
    console.log(`Server is listining on port : ${PORT}`)
})
// set engine "ejs"
app.set("view engine", "ejs");//implement a ligimate templating engine wich is 'ejs
app.set("view", path.join(__dirname, "views"))

// app.get("/", (req, res) => {
//     res.render("html")
// }) // It doesn't work
app.get("/result", (req, res) => {
    res.send("Thanks for submit")
});
function getWeather(req, res, next) {
    req.visitorWeather = false
    if (req.visitorWeather) {
      res.send("Not raining")
    } else {
      next()
    }
  }
  app.post("/result", (req, res) => {
    if (req.body.color.trim().toUpperCase() === "BLUE") {
      res.send("That is correct")
    } else {
      res.send("Incorrect, Sorry")
    }
  })
  
  app.get("/result", (req, res) => {
    res.send("Welcome back")
  })
  
  
  
app.use((req, res) => {
    console.log(' This is middleware ')
    res.status(404);
    res.json({ error: "Not Found" });
});

// when I tried to run the server , I get an error message :TypeError: View is not a constructor

/*  Example 2  */

// const user = [
//     {
//         id: 1,
//         name: "Joe",
//         age: 31,
//         username: "Joe123",
//         email: "Joe123@example.com",
//       }
// ]


// app.get('/user', (req,res) => {
//     const {name, age} = req.query;
//     let filterUser = user;
//     if (name) {
//         filterUser =filterUser.filter(user =>
//             user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
//         )
//     }
//     if (age) {
//         filterUser = filterUser.filter(user => user.age == age);
//       }
   
//       res.json(filterUser);
//     });




// // set route
// app.get('/hello', (req,res) => {
// res.send('Welcome to my Website')
// })
// app.get('', (req,res) => {
//     res.send('Hi there!')
//     })




// app.get('/user', (req,res) => {
//     if(user.length == 0){
//      res.status(404).send('No user found!')
//       return
// }
//   res.status(200).send(user)
//  })


// app.post('/user', (req,res) =>{
   
//     user.push(req.body)
//     res.status(201).send('created!')
// })




// // Route to get user by id
// app.get("/user/:id", (req, res, next) => {
//     const users = user.find((u) => u.id == parseInt(req.params.id));
//         if (users) res.json(user);
       
//         else next()
//     });
// // Using PATCh is update a user by id
// app.patch('/user/:id', (req, res, next) => {
//     const id= parseInt(req.params.id);
//     const {name, age, username, email} = req.body;
//     const users = user.find(u => u.id === id);
// })

