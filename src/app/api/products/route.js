import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    let query = "SELECT * FROM products WHERE 1=1";
    const params = [];

    if (category && category !== "All") {
      query += " AND category = ?";
      params.push(category);
    }

    if (search) {
      query += " AND title LIKE ?";
      params.push(`%${search}%`);
    }

    const [rows] = await pool.query(query, params);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
