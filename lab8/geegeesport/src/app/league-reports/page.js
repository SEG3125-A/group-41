import NavBar from "@/components/navbar";
import Image from "next/image";
import PieChart from "@/components/pieChart";
import BarChart from "@/components/barChart";
import LineChart from "@/components/lineChart";

export default function Home() {
    const options = {
      maintainAspectRatio: true,
      aspectRatio: 1, // Adjust this value as needed to change the chart size
      plugins: {
        legend: {
          position: 'top', // or 'bottom' if you prefer
        },
        title: {
          display: true,
          text: 'Pie Chart',
        },
      },
      // other options
    };
    return (
      <main className="w-full min-h-screen bg-white">
        <div>
          <div>
            <NavBar></NavBar>
          </div>
          <div>
            <div className="bg-gray-50 text-black  pt-4 pl-4">
              {/* Search bar */}
              <p className="text-center">Search For a Team</p>
                {/* Search bar container */}
                <div className="max-w-lg mx-auto p-4"> {/* Add horizontal padding if necessary */}
                  <div className="mt-4 relative">
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

                {/* Adding the charts */}
                <div className="flex flex-col justify-center items-center space-y-4 py-4"> {/* Add vertical padding and space between items */}
                  <div className="w-full max-w-lg"> {/* Constrain the width of the PieChart and center it */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                      <h2 className="text-center text-lg font-bold mb-4">Pie Chart</h2> {/* Add bottom margin for spacing */}
                      <PieChart options={options}></PieChart>
                    </div>
                  </div>

                  <div className="w-full max-w-lg"> {/* Constrain the width of the BarChart and center it */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h2 className="text-center text-lg font-bold mb-4">Bar Chart</h2> {/* Add bottom margin for spacing */}
                      <BarChart></BarChart>
                    </div>
                  </div>

                  <div className="w-full max-w-lg"> {/* Constrain the width of the LineChart and center it */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h2 className="text-center text-lg font-bold mb-4">Line Chart</h2> {/* Add bottom margin for spacing */}
                      <LineChart></LineChart>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </main>
    );
}