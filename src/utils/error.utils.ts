
class AppError extends Error{
    statusCode: number = 0;
    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, AppError);
    }
}


export default AppError