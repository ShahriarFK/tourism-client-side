import React, { useEffect, useState } from "react";
import bgImg from "../../images/banner.jpg";
import Package from "../Package/Package";

const Home = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      {/* top-banner-section */}
      <section
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Enjoy the Travel with <br className="" /> <br/>
              <span className="text-5xl bg-gray-800 rounded-md px-8 shadow-xl text-yellow-400">
                Travel-Man
              </span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-gray-300 text-lg">
              Want to get refreshed with us? So what are you waiting for folks?
              Pack your backs and lets go for a fancy trip!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-600 dark:bg-violet-400 dark:text-coolGray-900">
                Book Now
              </button>
              <button className="px-8 py-3 m-2 text-white text-lg border rounded dark:text-coolGray-50 dark:border-coolGray-700">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* all the packages section */}
      <div className="container mx-auto p-4 mt-16 mb-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold">
          Special Deals And{" "}
          <span className="text-yellow-500">Amazing Offers</span>{" "}
        </h2>
        <p className="dark:text-coolGray-400">Just Right For Your Vacation</p>
      </div>
      <section className="flex justify-center mb-20">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 center">
          {packages.map((item) => (
            <Package key={item._id} package={item}></Package>
          ))}
        </div>
      </section>
      {/* gallery section */}
      <section className="py-6 mx-24 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-4xl font-bold">
            Beautiful <span className="text-yellow-500">destinations</span> in
            Frames
          </h2>
          <p className="dark:text-coolGray-400">Just Amazin, isn't it ?</p>
        </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1568452834816-43fb48b09744?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1549221952-36906bf57252?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MnwwfGJsYWNrX2FuZF93aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1591467380967-e2f1b1df6e74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYXZlbHxlbnwwfDJ8MHxibGFja19hbmRfd2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1557285440-bdb5b0f09bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfDJ8MHxibGFja19hbmRfd2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1545472956-3849699264de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfDJ8MHxibGFja19hbmRfd2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1500583258537-98e2e4bded6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhfGVufDB8MnwwfGJsYWNrX2FuZF93aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1579200111505-a4e7de200f39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNlYXxlbnwwfDJ8MHxibGFja19hbmRfd2hpdGV8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500"
            src="https://images.unsplash.com/photo-1562581153-cc5ac116d6bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHwyfDB8YmxhY2tfYW5kX3doaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <img
            src="https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500"
          />
        </div>
      </section>
      {/* customer review section */}
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase">
            #Greece
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-3xl">
            " This is the <span className="text-yellow-500">best agency</span>{" "}
            in the market "
          </h1>
          <p className="text-sm dark:text-coolGray-400">
            by
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline dark:text-violet-400"
            >
              <span itemProp="name"> Leroy Jenkins </span>
            </a>
            on
            <time dateTime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
          </p>
        </div>
        <div className="pt-12 border-t dark:border-coolGray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src="https://source.unsplash.com/75x75/?portrait"
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-coolGray-500 dark:border-coolGray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
              <p className="dark:text-coolGray-400">
                It was last summer i decided to go with travel-man agency for
                the first time.How amazing decision it was.The service,the
                timimgs,the arrangements everything was so beautiful.........
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <a
              href="/"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
            >
              <svg
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fillCurrent"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              href="/"
              aria-label="Dribble"
              className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fillCurrent"
              >
                <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
              </svg>
            </a>
            <a
              href="/"
              aria-label="Twitter"
              className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fillCurrent"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              href="/"
              aria-label="Email"
              className="p-2 rounded-md dark:text-coolGray-100 hover:dark:text-violet-400"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fillCurrent"
              >
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
