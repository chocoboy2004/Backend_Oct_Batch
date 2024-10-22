class HandleError {
    constructor(statusCode, message = "Something Went Wrong!"){
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
    }
}

const handleError = new HandleError()

export default handleError