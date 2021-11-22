import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewService from './components/AddNewService/AddNewService';
import Blogs from './components/Blogs/Blogs';
import Booking from './components/Booking/Booking';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageBooking from './components/ManageBooking/ManageBooking';
import Navbars from './components/Navbars/Navbars';
import NotFound from './components/NotFound/NotFound';
import Offers from './components/Offers/Offers';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Purchase/Order';
import Purchase from './components/Purchase/Purchase';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars></Navbars>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:bookingId">
            <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path="/managebooking">
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/offers">
            <Offers></Offers>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/addnewservice">
            <AddNewService></AddNewService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details/:Id">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
