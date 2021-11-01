import React from "react";
import { useHistory } from "react-router";

const Package = (props) => {
  const { _id, name, info, image } = props.package;
  const history = useHistory();
  return (
    <div className="max-w-xs shadow-xl dark:bg-coolGray-900 dark:text-coolGray-100">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
          <p className="text-gray-400 dark:text-coolGray-100">
            {info.slice(0, 110)}
          </p>
        </div>
        <button
          onClick={()=>history.push(`/placeOrder/${_id}`)}
          type="button"
          className="flex bg-yellow-500 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-coolGray-900"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Package;
