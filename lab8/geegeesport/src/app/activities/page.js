"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import activities from "@/components/activities";
import { use, useEffect, useState } from "react";
import { useUser } from "@/components/userContext";


export default function Home() {
  const [search, setSearch] = useState('');
  const [days, setDay] = useState([]);
  const [time, setTime] = useState(-1);
  const [loggedIn, setLoggedIn] = useState(false);
  const { isLogged, getUser } = useUser();
  useEffect(() => {console.log(search)}, [search])
  useEffect(() => {console.log(days)}, [days])
  useEffect(() => {console.log(time)}, [time])
  useEffect(() => {if (isLogged()) {setLoggedIn(true);}}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search, days, time);

    bookActivity(e.target.id).then((data) => {
      console.log(data);
    });
  }

  const bookActivity = async (activity_id) => {
    const bookInfo = {
      activity_id: activity_id,
      user_id: getUser()
    }

    const response = await fetch('/api/book', {
      method: 'POST',
      body: JSON.stringify(bookInfo)
    });
    console.log(response);
    if (!response.ok) {
      alert('Activity already booked');
      return false;
    }

    alert('Activity booked successfully');
    return true;
  }


  return (
    <main className="w-full min-h-screen bg-white">
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        <div>
          <div className="bg-gray-50 text-black  pt-4 pl-4">
              {/* Filters section */}
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-semibold">Filters</h2>
                {/* Time Filter */}
                <div className="mt-4">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={e=>setTime(e.target.value)}
                  >
                    <option value="-1" id="-1" >Any</option>
                    {activities.getTimes().map((time, index) => (
                      <option key={index} value={index} id={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Day Filter */}
                <div className="mt-4">
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700">Day</legend>
                    {/* List of checkboxes for each day */}
                    <div className="mt-4 space-y-4">
                      {activities.getDays().map((day, index) => (
                       
                        <div key={index} className="flex items-center">
                          
                          <input
                            id={day}
                            name={day}
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            onChange={e=>setDay(e.target.checked ? [...days, index] : days.filter(d=>d!==index))}
                          />
                          <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
                            {day}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
              {/* Placeholder for activities */}
              <div className="flex-1 p-4">
                {/* Replace this with actual content */}
                <p className="text-center">Search for your favorite Activities</p>
                {/* Add search bar */}
                <div className="mt-4">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.293 8.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0 1 1 0 010-1.414l3-3a1 1 0 000-1.414 1 1 0 011.414 0zM7 10a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      placeholder="Search"
                      type="search"
                      onChange={e=>setSearch(e.target.value)}
                    />
                  </div>
                </div>
                {/* Add activities here, cards and 3 per row */}
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {activities.searchActivities(search, days, time).map((activity, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-48 w-full object-cover"
                          src={`/images/Intramural.jpg`}
                          alt=""
                          width={384}
                          height={384}
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-semibold">{activity.name}</h2>
                        <p className="mt-2 text-sm text-gray-500">{activity.description}</p>
                        {/* Add days and times */}
                        {/* Replace this with actual content */}
                        <div className="mt-4">
                          <p className="text-sm font-semibold">Days</p>
                          <div className="mt-2 space-x-2">
                            {activity.days.map((day, index) => (
                              <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                {activities.getDay(day)}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-semibold">Times</p>
                          <div className="mt-2 space-x-2">
                            {activity.times.map((time, index) => (
                              <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                {activities.getTime(time)}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Book button */}
                        {loggedIn && (
                        <div className="mt-4">
                          <button
                            id={activity.id}
                            type="submit"
                            className="w-full py-2 px-4 bg-red-800 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-800"
                            onClick={e=>handleSubmit(e)}
                          >
                            Book
                          </button>
                        </div>
                        )}

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
