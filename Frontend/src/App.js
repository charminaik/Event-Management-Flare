import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainContainer from "./MainContainer";
import EventList from "./components/EventList";
import FilterEvents from "./components/FilterEvents";
import EventDetails from "./components/EventDetails";
import Payment from "./components/Payment";
import Registration from "./components/Registration";
import QRCodePage from "./components/QRCodePage";

const App = () => {
  return (
    <Router>
      <div>
        <MainContainer />
        <Toaster />
        <Routes>
          <Route path="/Homepage" element={<EventList />} />
          <Route path="/find-events" element={<FilterEvents />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/QRCodePage" element={<QRCodePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;