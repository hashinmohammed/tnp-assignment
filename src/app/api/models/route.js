import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const query = "SELECT * FROM models_page LIMIT 1";
    const [rows] = await pool.query(query);

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "No data found for Model S page" },
        { status: 404 },
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Model S data" },
      { status: 500 },
    );
  }
}
