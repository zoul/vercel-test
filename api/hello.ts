import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async (
  request: VercelRequest,
  response: VercelResponse
): Promise<void> => {
  response.send("🐈");
};
