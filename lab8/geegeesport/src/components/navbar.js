"use client";
import Image from "next/image";
import { use, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/components/userContext";


import Link from "next/link";
export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname);
  const [isChecked, setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const { isLogged, logout } = useUser();
  useEffect(() => {
    if (isLogged()) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    window.location.reload();
  }
  

  return (
    <nav className=" w-full text-red-800 font-bold bg-slate-100  rounded   p-5 items-center">
      <ul className=" flex flex-row items-center  ">
        <div className="flex  jusitfy-between items-center w-1/3 flex-row">
          {/* Navigation Links */}
          <li
            className={
              pathname == "/"
                ? "bg-red-800 text-white  pl-5 p-4 pr-5 rounded-xl"
                : "p-2"
            }
          >
            <a href="/">
              <p>Home</p>
            </a>
          </li>
          <li
            className={
              pathname == "/activities"
                ? "bg-red-800 text-white  pl-5 p-4 pr-5 rounded-xl"
                : "pl-10"
            }
          >
            <a href="/activities">
              <p>Activities</p>
            </a>
          </li>
          <li
            className={
              pathname == "/facilities"
                ? "bg-red-800 text-white  pl-5 pr-5 rounded-xl"
                : "pl-10"
            }
          >
            <a href="/facilities">
              <p>Facilities</p>
            </a>
          </li>
          <li
            className={
              pathname == "/league-reports"
                ? "bg-red-800 text-white  pl-5 pr-5  rounded-xl"
                : "pl-10 "
            }
          >
            <a href="/league-reports">
              <p>League reports</p>
            </a>
          </li>
        </div>
        <div className="flex justify-center w-1/3">
          <img src="./images/geegee_logo.png" width={"48px"} />
        </div>
        {/* Right-aligned items */}
        <li className="flex flex-row items-center justify-end  space-x-4 w-1/3">
          <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none mr-5 items-center">
            <input
              type="checkbox"
              name="autoSaver"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-red-800" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-6" : ""
                }`}
              ></span>
            </span>
            <span className="label flex items-center text-md font-medium text-black">
              {" "}
              <span className="pl-1"> {isChecked ? "French" : "English"} </span>
            </span>
          </label>

        </li>
        {loggedIn && (
          <li
            className={
              pathname == "/login"
                ? "bg-red-800 text-white  pl-5 p-4 pr-5 rounded-xl"
                : "pl-10"
            }
          >
            <a href="#" onClick={e=>{handleLogout()}}>Logout</a>
          </li>
        )}
        {!loggedIn && (
        <li
          className={
            pathname == "/login"
              ? "bg-red-800 text-white  pl-5 p-4 pr-5 rounded-xl"
              : "pl-10"
          }
        >
          <a href="/login">
            <p>Login</p>
          </a>
        </li>
      )}
      {!loggedIn && (
            <li
              className={
                pathname == "/register"
                  ? "bg-red-800 text-white  pl-5 p-4 pr-5 rounded-xl"
                  : "pl-10"
              }
            >
              <a href="/register">
                Register
              </a>
            </li>
      )}

      </ul>
    </nav>
  );
}
