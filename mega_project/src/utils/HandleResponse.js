class HandleResponse {
    constructor(statusCode, data, message = "Success!"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = true
    }
}

const handleResponse = new HandleResponse()

export default handleResponse