// import { createServer } from "node:http"
/*
  1. createServer function is used in nodejs for creating a server. Basically we import it from node:http.
*/

// const hostname = "127.0.0.1"
// const port = 9999

// 200    400    500
// 200 = OK
// 400 = Client Side Error
// 500 = Backend Error

// const server = createServer(function(req, res){
//     res.statusCode = 200;  // res.statusCode is use to determine the status code
//     res.setHeader("Content-Type", "text/plain")  // What type of data you are sending to the client side
//     res.end("Hello World!")  // What message you are sending
// })

// .listen() helps to start the server. Also tells the machine that this port will be using for starting the server.
// server.listen(port, hostname, function(){   
//     console.log('Server is listining');
// })



// Application Programming Interface
// IDE (Integrated Development Environment) - VsCode
// Nodejs

import {createServer} from "node:http"

const hostname = "127.0.0.1"
const port = 4000

// 200 = No Error
// 400 = There is an error in client side
// 500 = There is an error in server side

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World!")
})

server.listen(port, hostname, () => {
  console.log(`Server is running!!!`)
})