import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { NextResponse } from "next/server";
import path from 'path'

const defaultData = {users: []}
const filePath = path.resolve('./public/users_db', 'users_db.json');
const db = new Low(new JSONFile(filePath), defaultData)


export async function POST(request) {
  console.log("POST /api/register");
  const newUser = await request.json();
  console.log(newUser);
  var users = db.data.users;
  
  if (!users) {
    users = []
  }
  console.log(users);

  if (users.find(user => user.email === newUser.email)) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  await db.update(({ users }) => users.push(newUser))

  return NextResponse.json({ message: request }, { status: 200 })
}