import NavBar from "@/components/navbar";
import Image from "next/image";
import PieChart from "@/components/pieChart";
import BarChart from "@/components/barChart";
import LineChart from "@/components/lineChart";

export default function Home() {
    return (
      <main className="w-full min-h-screen bg-white">
        <div>
          <div>
            <NavBar></NavBar>
          </div>
          <div>
            <div className="bg-gray-50 text-black  pt-4 pl-4">
              {/* Search bar */}
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
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    );
}