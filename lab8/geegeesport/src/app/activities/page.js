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
                {/* Add activities here, cards and 3 per row */}
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Firt row */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/1.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 1</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/2.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 2</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/3.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 3</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  {/* Second row */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/1.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 4</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/2.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 5</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/3.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 6</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  {/* Third row */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/1.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 7</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/2.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 8</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src="/images/activities/3.jpg"
                        alt=""
                        width={384}
                        height={384}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-lg font-semibold">Activity 9</h2>
                      <p className="mt-2 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
