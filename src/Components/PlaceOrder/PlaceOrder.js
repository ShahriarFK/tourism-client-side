import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const [packages, setPackages] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const numbRef = useRef();
  const dateRef = useRef();
  const ticketRef = useRef();
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const singlePackage = packages.find((item) => item._id == id);
  const handlebookingBtn = (e) => {
    const booking = {
      name: user?.displayName,
      email: user?.email,
      date: dateRef.current.value,
      phone: numbRef.current.value,
      ticketNumber: ticketRef.current.value,
      packageName: singlePackage?.name,
      packageImg: singlePackage?.image,
      status: "Pending",
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just booked this package.You are welcome.");
          if (alert) {
            history.push("/myBookings");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-2 mx-auto items-center">
          <div className="flex justify-center">
            <img width="600px" src={singlePackage?.image} alt="" />
          </div>
          <div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
              <h2 className="text-4xl font-bold text-yellow-500">
                {singlePackage?.name}
              </h2>
              <p className="dark:text-coolGray-400">{singlePackage?.info}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <form
              onSubmit={handlebookingBtn}
              className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <h2 className="font-bold text-gray-900 text-lg font-medium title-font mb-5">
                Book This Package
              </h2>
              <div className="relative mb-4">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={user.displayName}
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={user.email}
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  ref={numbRef}
                  type="number"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="phone number"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Date
                </label>
                <input
                  ref={dateRef}
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="journey date"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Tickets
                </label>
                <input
                  ref={ticketRef}
                  type="number"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Number of tickets"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                Book Now
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Fill up all the input value and submit.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceOrder;
