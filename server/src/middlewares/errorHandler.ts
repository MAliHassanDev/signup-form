import { NextFunction,Request,Response } from "express";

const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
  console.log(err);
  res.status(500).json({ error: "Internal Server Error" });
}

export default errorHandler;