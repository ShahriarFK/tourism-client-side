import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyBooking from "../MyBooking/MyBooking";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this package?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Remove success !");
            // const found = bookings.filter(booking=>booking._id!=id)
            const filtered = bookings.filter((service) => service._id != id);
            setBookings(filtered);
          }
        });
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-28 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {bookings.map((myBooking) => (
              <MyBooking
                key={myBooking._id}
                handleDeleteBtn={handleDeleteBtn}
                myBooking={myBooking}
              ></MyBooking>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBookings;
