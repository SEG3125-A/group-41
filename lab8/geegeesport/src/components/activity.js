import React, { useState, useEffect } from 'react';

const Activity = ({ activity_id, user_id }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (user_id) {
        setLoggedIn(true);
    }
    }, [user_id]);


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

  useEffect(() => {
    const checkIfActivityIsBooked = async () => {
    console.log('Checking if activity is booked');

      setIsLoading(true);
      try {
        const response = await fetch('/api/isBooked', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ activity_id: activity_id, user_id: user_id }),
        });
        const data = await response.json();
        setIsBooked(data.booked);
      } catch (error) {
        console.error('Error checking activity booking status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkIfActivityIsBooked();
  }, [activity_id]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      {!isBooked && loggedIn && (
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-800 text-white"
            onClick={handleSubmit}
          >
            Book
          </button>
        </div>
      )}
      {isBooked && (
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-800 text-white"
            disabled
          >
            Booked
          </button>
        </div>
      )}
    </>
  );
};

export default Activity;
