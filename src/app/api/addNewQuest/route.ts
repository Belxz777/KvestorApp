import { sql,db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(req: Request) {
  const {id,question, answer, variants, hardness, lat, lon, author, quiz_in, categorie} = await req.json()
  try {
    const result = await sql`'INSERT INTO quests_table (id,question, answer, variants, hardness, lat, lon, author, quiz_in, categorie) VALUES (${id},${question}, ${answer},${variants},${hardness}${lat},${lon},${author},${quiz_in},${categorie})`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}