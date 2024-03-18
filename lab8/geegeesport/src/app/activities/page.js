import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        <div>
          <div className="bg-gray-50">
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
                  >
                    <option>0:00 - 0:00</option>
                    {/* Add additional time options here */}
                  </select>
                </div>

                {/* Day Filter */}
                <div className="mt-4">
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700">Day</legend>
                    {/* List of checkboxes for each day */}
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="sunday"
                          name="day"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="sunday" className="ml-2 block text-sm text-gray-900">
                          Sunday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="monday"
                          name="day"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="monday" className="ml-2 block text-sm text-gray-900">
                          Monday
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="tuesday"
                          name="day"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="tuesday" className="ml-2 block text-sm text-gray-900">
                          Tuesday
                        </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="wednesday"
                            name="day"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="wednesday" className="ml-2 block text-sm text-gray-900">
                            Wednesday
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="thursday"
                            name="day"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="thursday" className="ml-2 block text-sm text-gray-900">
                            Thursday
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="friday"
                            name="day"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="friday" className="ml-2 block text-sm text-gray-900">
                            Friday
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="saturday"
                            name="day"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label htmlFor="saturday" className="ml-2 block text-sm text-gray-900">
                            Saturday
                          </label>
                        </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              {/* Placeholder for activities */}
              <div className="flex-1 p-4">
                {/* Replace this with actual content */}
                <p className="text-center">Activities content goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
