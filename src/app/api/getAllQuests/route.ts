import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { rows } =
    await sql`SELECT * FROM quests_table`;
  if (rows.length === 1) {
    const res = new NextResponse(
      JSON.stringify({ message: "Success", result: true })
    );
    return res;
  }
  return NextResponse.json({ message: "Failed ", result: false });
}