import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import gIcon from "../../images/icons8-google-100.png";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handlesignInUsingGoogleBtn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <section className="text-gray-400 lg:py-28 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-800">
            Travel Man Agency Limited
          </h1>
          <p className="leading-relaxed mt-4">
            Login to explore more and more of our service and packages.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign in
          </h2>
          <div className="relative my-4">using google</div>
          <button
            onClick={handlesignInUsingGoogleBtn}
            className="flex justify-center rounded-full text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
          >
            <img className="w-12" src={gIcon} alt="" />
          </button>
          <p className="text-xs mt-3">Have a nice day</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
