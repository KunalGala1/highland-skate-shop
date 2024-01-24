import type { NextApiRequest, NextApiResponse } from "next";

import getEvents from "@/lib/getEvents";
import { NextRequest } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const response = await getEvents();

    return Response.json({
      message: "Success",
      data: response,
    });
  } catch (error) {
    return Response.json({
      message: "Error",
      error: error,
    });
  }
}
