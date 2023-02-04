import { NextFunction, Request, Response } from 'express';
import ExceptionHttp from '../util/exception.http';

class HandleError {
  public static handle(err: Error, _req: Request, res: Response, _next: NextFunction) {
    const { status, message } = err as ExceptionHttp;

    if (status) {
      return res.status(status || 500).json({ message });
    }
  }
}
export default HandleError; 