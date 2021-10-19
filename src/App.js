import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import About from "./components/pages/About/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import NotFound from "./components/pages/NotFound/NotFound";

import Footer from "./components/shared/Footer/Footer";
import ServiceDetails from "./components/pages/ServceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

import "./App.css";
import Register from "./components/shared/Header/Login/Register";
import Login from "./components/shared/Header/Login/Login";
import PrivateRoute from "./components/shared/Header/Login/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/all-services">
              <Services></Services>
            </Route>
            <Route exact path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
