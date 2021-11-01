import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddPackage from "./Components/AddPackage/AddPackage";
import AllBookings from "./Components/AllBookings/AllBookings";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyBookings from "./Components/MyBookings/MyBookings";
import NotFound from "./Components/NotFound/NotFound";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Review from "./Components/Review/Review";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
