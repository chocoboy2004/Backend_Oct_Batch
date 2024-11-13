import express from "express"

const app = express()


import jobseekerRoute from "./routes/jobseeker.route.js"

app.use("/api/v1/jobseeker", jobseekerRoute)



export default app