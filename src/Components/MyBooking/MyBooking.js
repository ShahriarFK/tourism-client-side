import React from "react";

const MyBooking = (props) => {
  const { _id, packageName, packageImg, status, date, ticketNumber } =
    props.myBooking;
  const { handleDeleteBtn } = props;
  return (
    <div className="py-8 shadow-xl lg:px-48 lg:flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img src={packageImg} alt="" />
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          <span
            className={
              status == "Pending"
                ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700"
                : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            }
          >
            {status}
          </span>{" "}
          <br />
          <span className="text-lg">Destination :</span>{" "}
          <span className="text-yellow-500 font-bold">{packageName}</span>
        </h2>
        <span className="mt-1 text-gray-500 text-sm">
          <span className="text-lg">Departure day :</span> {date}
        </span>{" "}
        <br />
        <span className="mt-1 text-gray-500 text-sm">
          <span className="text-lg">Number of tickets :</span> {ticketNumber}
        </span>{" "}
        <br />
        <div className="text-yellow-500 inline-flex items-center mt-4">
          Learn More
        </div>
      </div>
      <div className="lg:block flex justify-center">
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="flex items-center gap-2 text-white bg-red-600 p-4 rounded-xl hover:bg-red-700"
        >
          Delete
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MyBooking;
