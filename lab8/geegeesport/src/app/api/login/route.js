import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { NextResponse } from "next/server";
import path from 'path'

const defaultData = {users: []}
const filePath = path.resolve('./public/users_db', 'users_db.json');
const db = new Low(new JSONFile(filePath), defaultData)


export async function POST(request) {

  const newUser = await request.json();
  var users2 = db.data.users;
  
  if (!users2) {
    users2 = []
  }

  if (users2.find(user => user.email === newUser.email && user.password === newUser.password)) {
    return NextResponse.json({ message: "User already exists" }, { status: 401 });
  }


  return NextResponse.json({ message: request }, { status: 200 })
}