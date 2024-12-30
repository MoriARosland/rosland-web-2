import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams;
  const id = urlParam.get("query") as string; // Extracts the id from the query string

  try {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);

    const objectId = new ObjectId(id);

    const project = await db.collection("projects").findOne({
      _id: objectId,
    });

    console.log("From route: ", project);

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Project fetch failed:", error);
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}
