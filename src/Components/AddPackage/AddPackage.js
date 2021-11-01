import React, { useRef } from "react";
import { useHistory } from "react-router";

const AddPackage = () => {
  const history = useHistory();
  const nameRef = useRef();
  const detailsRef = useRef();
  const imgRef = useRef();
  const handleAddBtn = (e) => {
    const newPackage = {
      name: nameRef.current.value,
      info: detailsRef.current.value,
      image: imgRef.current.value,
    };
    fetch("https://rocky-everglades-33636.herokuapp.com/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You just added the package");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div className="flex justify-center lg:my-20">
      <form
        onSubmit={handleAddBtn}
        className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 className="font-bold text-gray-900 text-lg font-medium title-font mb-5">
          Add New Package
        </h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
            Package Name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Package description
          </label>
          <textarea
            ref={detailsRef}
            className="w-full h-60 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Image URL
          </label>
          <input
            ref={imgRef}
            type="text"
            id="text"
            name="image"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
        >
          Add Package
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Fill up all the input value and submit.
        </p>
      </form>
    </div>
  );
};

export default AddPackage;
