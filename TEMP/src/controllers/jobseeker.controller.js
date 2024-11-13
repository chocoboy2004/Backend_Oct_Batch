import HandleError from "../utils/HandleError.js"
import HandleResponse from "../utils/HandleResponse.js"

const greeting = (req, res) => {
    return res
        .status(200)
        .json(
            new HandleResponse(
                200,
                {
                    message: "Hello World!"
                },
                "Greeting message sent successfully"
            )
        )
}

export {
    greeting
}