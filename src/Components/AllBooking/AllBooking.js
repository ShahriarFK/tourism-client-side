import React from "react";

const AllBooking = (props) => {
  const { _id, packageName, date, ticketNumber, name, email, status } =
    props.allBooking;
  const { handleApproveBtn, handleDeleteBtn } = props;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10"></div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{packageName}</div>
        <div className="text-sm text-gray-500">{ticketNumber}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={
            status == "Pending"
              ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700"
              : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          }
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {date}
      </td>
      <td className="flex justify-center gap-3 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => handleApproveBtn(_id)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Approve
        </button>
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="flex items-center gap-2 text-white bg-red-600 py-2 px-3 rounded-xl hover:bg-red-700"
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
      </td>
    </tr>
  );
};

export default AllBooking;
