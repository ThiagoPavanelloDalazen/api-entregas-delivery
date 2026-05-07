import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";
import { AppError } from "../utils/AppError";


interface TokenPayload {
    role: string;
    sub: string;
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    try{
        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new AppError("JWT token is missing", 401);
        }

        // Bearer token - split the string into two parts: "Bearer" and the actual token
        const [, token] = authHeader.split(" ");

        const { role, sub: userId } = verify(token, authConfig.jwt.secret) as TokenPayload;

        request.user = {
            id: userId,
            role
        }

        return next();

    }catch(error){
        throw new AppError("Invalid JWT token", 401);
    }   
}

export { ensureAuthenticated };