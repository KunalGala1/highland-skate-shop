import getEvents from "@/lib/getEvents";
import { NextRequest } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(request: Request) {
  try {
    const res = await getEvents();

    return Response.json({
      message: "Success",
      data: res,
    });
  } catch (error) {
    return Response.json({
      message: "Error",
      error: error,
    });
  }
}
