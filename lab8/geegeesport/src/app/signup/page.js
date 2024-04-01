"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import { useRouter  } from 'next/navigation'

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { push } = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== pwdConfirm) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      email,
      password,
      phoneNumber,
    };
    //console.log(userData);
    addUser(userData).then((data) => {
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else {
        push("/login");
      }
    });
  };

  const addUser = async (userData) => {
    //console.log(JSON.stringify(userData));
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };
  
  return (
    <main className="w-full max-h-screen  bg-white text-black">
      <div className="max-h-screen">
        <div className=" flex flex-row overflow-hidden">
          <div className=" max-h-screen flex flex-col w-full">
            {/**images */}
            <div className="  p-1 w-1/2  overflow-hidden ">
              <img
                className="rounded-xl object-fill"
                src="./images/image2.jpg"
              />
            </div>
            <div className=" p-1 flex w-full flex-row justify-end     ">
              <img
                className="rounded-xl object-fill w-1/2"
                src="./images/image1.jpeg"
              />
            </div>
            <div className="  p-5 w-1/2  overflow-hidden">
              <img
                className="rounded-xl object-fill"
                src="./images/image2.jpg"
              />
            </div>
          </div>
          <div className="bg-slate-100 w-full max-h-screen">
            {/**forms */}
            <div className="flex items-center pt-10 justify-center font-black text-4xl flex-col">
              <span className="text-red-800">GEE GEE SPORT</span>
            </div>
            <div className="flex items-center justify-center min-h-screen ">
              <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl text-black font-bold text-center mb-4">
                  Sign Up
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1  flex justify-between relative rounded-md shadow-sm">
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-7 p-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="name@uottawa.ca"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
                      <div
                        className="tooltip flex items-center justify-center ml-2 "
                        data-tip="please enter your univeristy email"
                      >
                        <button className="btn bg-red-800    text-white ">
                          ?
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1 relative flex justify-between rounded-md shadow-sm">
                      <input
                        type="phoneNumber"
                        id="phoneNumber"
                        className="block w-full p-2 sm:text-sm border-gray-300 rounded-md"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                  
                      <div
                        className="tooltip flex items-center justify-center ml-2 "
                        data-tip="please enter your phone number in format ***-***-****"
                      >
                        <button className="btn bg-red-800    text-white ">
                          ?
                        </button>
                      </div>
                      </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1  flex justify-between relative rounded-md shadow-sm">
                      <input
                        type="password"
                        id="password"
                        className="block w-full p-2 sm:text-sm border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div
                        className="tooltip flex items-center justify-center ml-2 "
                        data-tip="Please enter a password of length 8 character or greater"
                      >
                        <button className="btn bg-red-800    text-white ">
                          ?
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1  flex justify-between relative rounded-md shadow-sm">
                      <input
                        type="confirmPassword"
                        id="confirmPassword"
                        className="block w-full p-2 sm:text-sm border-gray-300 rounded-md"
                        value={pwdConfirm}
                        onChange={(e) => setPwdConfirm(e.target.value)}
                        required
                      />
                       <div
                        className="tooltip flex items-center justify-center ml-2 "
                        data-tip="Please re-enter your password exactly as written before"
                      >
                        <button className="btn bg-red-800    text-white ">
                          ?
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-red-800 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-800"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm">
                      <a
                        href="/login"
                        className="text-red-600 hover:text-red-700"
                      >
                        {" "}
                        Already have an account? Sign In!
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
