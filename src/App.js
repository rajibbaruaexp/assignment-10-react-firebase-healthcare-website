import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import About from "./components/pages/About/About";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import NotFound from "./components/pages/NotFound/NotFound";

import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import ServiceDetails from "./components/pages/ServceDetails/ServiceDetails";
function App() {
  return (
    <div className="App">
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
          <Route exact path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
