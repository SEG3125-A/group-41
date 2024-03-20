import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const db = await open({
      filename: './public/users_db/users_db.sqlite',
      driver: sqlite3.Database,
    });

    const newUser = await request.json();
    // console.log(newUser);

    const user = await db.get('SELECT * FROM users WHERE email = ?', newUser.email);
    // console.log("test")
    // console.log(user);

    await db.close();

    if (user && (await bcrypt.compare(newUser.password, user.password))) {
      return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
    } 
    return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
  }
  catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal error" }), { status: 500 });
  }
}

// import { Low } from 'lowdb';
// import { JSONFile } from 'lowdb/node'
// import { NextResponse } from "next/server";
// import path from 'path'

// const filePath = path.resolve('./public/users_db', 'users_db.json');
// const adapter = new JSONFile(filePath);
// const db = new Low(adapter);

// const initDB = async () => {
//   await db.read();
//   db.data ||= { users: [] }; 
//   await db.write(); 
// };

// export async function POST(request) {
//   await initDB();

//   const newUser = await request.json();
//   const users = db.data.users;

//   // if (users.find(user => user.email === newUser.email && user.password === newUser.password)) {
//   //   return NextResponse.json({ message: "User already exists" }, { status: 409 });
//   // }

//   return NextResponse.json({ message: "User does not exist" }, { status: 200 });
// }
