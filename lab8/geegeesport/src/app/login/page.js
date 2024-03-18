"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This would be your form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };
  return (
    <main className="w-full min-h-screen bg-white">
      <div>
        <div className=" flex flex-row">
          <div className="w-full">
            {/**images */}
            <div class="   w-1/2 p-10 ...">
              <img className="rounded-xl" src="./images/image1.jpeg" />
            </div>
          </div>
          <div className="bg-slate-100 w-full">
            {/**forms */}
            <div className="flex items-center mt-10 justify-center font-black text-4xl flex-col">
              <span className="text-red-800">GEE GEE SPORT</span>
            </div>
            <div className="flex items-center justify-center min-h-screen ">
              <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl text-black font-bold text-center mb-4">
                  Log In
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="name@uottawa.ca"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span
                          className="text-gray-500 sm:text-sm"
                          title="Need help?"
                        >
                          ?
                        </span>
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
                    <input
                      type="password"
                      id="password"
                      className="block w-full sm:text-sm border-gray-300 rounded-md"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-red-800 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-800"
                    >
                      Log in
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm">
                      Don't have an account?
                      <a href="#" className="text-red-600 hover:text-red-700">
                        {" "}
                        Create an account
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
