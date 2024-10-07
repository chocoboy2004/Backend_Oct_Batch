class ErrorHandle {
    constructor(
        statusCode,
        message = "Something Went Wrong !!"
    ){
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
    }
}

const errorHandle = new ErrorHandle()

export default errorHandle

// 200 = it is fine
// 400 = client side error
// 500 = server side error