// app/api/emails/route.ts
import { NextResponse } from "next/server";
import { neon } from '@neondatabase/serverless';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, marketing_consent } = body;

    // Input validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: "Valid email is required", success: false }, { status: 400 });
    }

    // Connect to Neon database
    const sql = neon(process.env.DATABASE_URL!);
    
    // Insert into database
    await sql`
      INSERT INTO emails (email, marketing_consent, created_at) 
      VALUES (${email}, ${marketing_consent}, NOW())
    `;

    console.log("Email saved to database:", { 
      email, 
      marketing_consent,
      created_at: new Date().toISOString() 
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email signup error:", error);
    return NextResponse.json({ error: "Failed to save email", success: false }, { status: 500 });
  }
}
