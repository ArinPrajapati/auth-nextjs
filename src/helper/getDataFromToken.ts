import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import toast from "react-hot-toast";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodeData: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodeData.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
