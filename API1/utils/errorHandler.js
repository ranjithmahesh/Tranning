class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ErrorHandler";
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
