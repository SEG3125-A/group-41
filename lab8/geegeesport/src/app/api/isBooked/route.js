import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function POST(request) {
  try {
    const db = await open({
      filename: './public/bookings_db/bookings_db.sqlite',
      driver: sqlite3.Database,
    });

    const newUser = await request.json();
    // console.log(newUser);
    //console.log("test")
    await db.run('CREATE TABLE IF NOT EXISTS bookings (user_id TEXT, activity_id INTEGER, PRIMARY KEY (user_id, activity_id));');

    // Check if user has already booked the activity
    const user = await db.get('SELECT * FROM bookings WHERE user_id = ? AND activity_id = ?', [newUser.user_id, newUser.activity_id]);
    if (user) {
      // console.log("Activity already booked");
      await db.close();
      return new Response(JSON.stringify({ message: "Activity already booked", booked: true }), { status: 201 });
    }

    return new Response(JSON.stringify({ message: "Activity not booked", booked: false }), { status: 201 });
    
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Activity already booked" }), { status: 400 });
  }
}
















// import { Low } from 'lowdb';
// import { JSONFile } from 'lowdb/node'
// import path from 'path';

// // Define the path to the JSON file
// const defaultData = {users: []}
// const filePath = path.resolve('./public/users_db', 'users_db.json');
// const db = new Low(new JSONFile(filePath), defaultData)

// // Initialize the database if it's not already initialized
// const initDB = async () => {
//   await db.read();
//   db.data ||= { users: [] };
//   await db.write(); // This initializes the file with the default data if it doesn't exist
// };

// export async function POST(request) {
//   console.log("POST /api/register");
  
//   // Initialize DB and read the existing users
//   await initDB();
  
//   // Parse the request body to get the new user's data
//   const newUser = await request.json();
//   console.log(newUser);

//   // Check if user already exists
//   if (db.data.users.find(user => user.email === newUser.email)) {
//     // Return a conflict status code
//     return new Response(JSON.stringify({ message: "User already exists" }), { status: 409 });
//   }

//   // Add new user to the array
//   db.data.users.push(newUser);

//   // Write the updated users back to the file
//   await db.write();

//   // Return a success response
//   return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
// }
