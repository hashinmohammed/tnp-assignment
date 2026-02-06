import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const model = searchParams.get("model");

  try {
    let query = "SELECT * FROM specs";
    let params = [];

    if (model) {
      query += " WHERE model_name = ?";
      params.push(model);
    }

    const [rows] = await pool.query(query, params);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch specs" },
      { status: 500 },
    );
  }
}
