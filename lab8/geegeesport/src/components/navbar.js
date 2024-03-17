"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="absolute z-10 w-full text-red-800 font-bold bg-slate-100  rounded   p-5 items-center">
      <ul className=" flex flex-row items-center ">
        <div className="flex  space-x-10 items-center flex-row">
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
                ? "bg-red-800 text-white  pl-5 pr-5 rounded-xl"
                : "p-2"
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
                : "p-2"
            }
          >
            <a href="/facilities">
              <p>Facilities</p>
            </a>
          </li>
          <li
            className={
              pathname == "/league-reports"
                ? "bg-red-800 text-white  pl-5 pr-5 rounded-xl"
                : "p-2"
            }
          >
            <a href="/league-reports">
              <p>League Reports</p>
            </a>
          </li>
        </div>
        {/* Right-aligned items */}
        <li className="flex flex-row items-center justify-end w-full space-x-4">
          <button className="bg-white p-2 rounded-full  pr-5">English</button>
          <div className="flex items-center space-x-2">
            <span>Aditya Kandel</span>
            {/* Replace with the correct path to your profile image */}
            <Image
              src="/path/to/your/profile/image.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
