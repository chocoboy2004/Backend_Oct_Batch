class ResponseHandle {
    constructor(
        statusCode,
        data,
        message = "Success!!!"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

const responseHandle = new ResponseHandle()

export default responseHandle