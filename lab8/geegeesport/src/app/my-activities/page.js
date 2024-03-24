"use client"
import NavBar from "@/components/navbar";
import activities from "@/components/activities";
import { useEffect, useState } from "react";
import { useUser } from "@/components/userContext";
import Image from "next/image";

// Get all the user activities
// Activities of the user are in the API /api/userActivities
// No filtering is needed

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    const { isLogged, getUser } = useUser();
    const [user_id, setUser] = useState(null);
    const [userActivities, setUserActivities] = useState([]);

    useEffect(() => {
        if (isLogged()) {
        setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        var user = getUser();
        if (user) {
            setUser(user);
            console.log(user);
        }
    }, [loggedIn]);

    const getUserActivities = async () => {
        const userInfo = {
            user_id: user_id,
        };
        const response = await fetch("/api/userActivities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        if (!response.ok) {
            alert("Error getting user activities");
            return;
        }
        setUserActivities(data.userBookings);
        console.log(data);
    }

    useEffect(() => {
        if (user_id) {
            getUserActivities();
        }
    }, [user_id]);

    return (
        <main className="w-full min-h-screen bg-white">
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <div className="bg-gray-50 text-black  pt-4 pl-4">
                    <div className="flex justify-between flex-wrap">
                        {userActivities && userActivities.length > 0 ? (
                            activities.getUserBookings(userActivities).map((activity, index) => (
                                <div key={index} className="mt-4 w-1/3">
                                    <div className="flex-shrink-0">
                                        <Image
                                            className="h-48 w-full object-cover"
                                            src={`/images/Intramural.jpg`}
                                            alt=""
                                            width={384}
                                            height={384}/>
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-lg font-semibold">
                                            {activity.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500">
                                            {activity.description}
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold">Days</p>
                                            <div className="mt-2 space-x-2">
                                                {activity.days.map((day, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                                                    >
                                                        {activities.getDay(day)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold">Times</p>
                                            <div className="mt-2 space-x-2">
                                                {activity.times.map((time, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                                                    >
                                                        {activities.getTime(time)}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No activities found.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
