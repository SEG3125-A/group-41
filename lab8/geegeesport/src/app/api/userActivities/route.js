import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function POST(request) {
  try {
    const db = await open({
      filename: './public/bookings_db/bookings_db.sqlite',
      driver: sqlite3.Database,
    });

    const newUser = await request.json();
    console.log(newUser);
    await db.run('CREATE TABLE IF NOT EXISTS bookings (user_id TEXT, activity_id INTEGER, PRIMARY KEY (user_id, activity_id));');

    // Get all bookings for a user
    const userBookings = await db.all('SELECT activity_id FROM bookings WHERE user_id = ?', [newUser.user_id]);
    
    await db.close();
    console.log("Getting user bookings")
    console.log(userBookings);
    if (userBookings.length > 0) {
        return new Response(JSON.stringify({ message: "User bookings retrieved successfully", userBookings: userBookings }), { status: 201 });
    }


    return new Response(JSON.stringify({ message: "Booked activity successfully" }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Activity already booked" }), { status: 400 });
  }
}