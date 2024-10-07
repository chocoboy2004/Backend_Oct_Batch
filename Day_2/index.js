// import express from "express"

// const app = express()
// const port = 3000

// // If you write anything after forward slash (/), It will be considered as an end-point.

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

// app.get("/login", (req, res) => {
//     res.send("It is a login page! Please login !!")
// })

// app.get("/logout", (req, res) => {
//     res.send("It is a logout page!")
// })

// app.get("/greeting", (req, res) => {
//     res.send("Welcome!")
// })

// app.listen(port, () => {
//     console.log("Server is running !!!")
// })





// Nodejs -- JavaScript Runtime Environment 
 
import express from "express"

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Home Page!")
})

app.get("/login", (req, res) => {
    res.send("Login Page!")
})

app.get("/logout", (req, res) => {
    res.send("Logout Page!")
})

app.listen(port, () => {
    console.log(`Server is started !!!`)
})





































// /*
//     HTTP Methods (HyperText Transfer Protocol)
//     POST, GET, DELETE, PATCH, PUT

//     POST: Help us to send data to the server securely.
//     GET: Retreive data from server.
//     DELETE: Help us to delete any particular data from the database.
//     PATCH: Updating a particular thing.
//     PUT: Updating The whole data.
// */  