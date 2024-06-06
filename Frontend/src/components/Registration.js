import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/Registration.css";
import Navigation from "./Navigation";

const Registration = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventNameFromParams = params.get("eventName") || "";
  const feeFromParams = params.get("fee") || "";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhoneNo] = useState("");
  const [eventname, setEventname] = useState(eventNameFromParams);
  const [fee, setFee] = useState(feeFromParams);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/details/registered",
        {
          username,
          email,
          phn,
          eventname,
          fee,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res && res.data) {
        toast.success(res.data.message);
        navigate("/Payment", { state: { registrationData: { username, email, phn, eventname, fee } } });
      } else {
        toast.error("Unexpected response from server");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while signing up");
      }
    }
  };

  return (
    <div id="registration" className="registration container">
      <Navigation />
      <div className="form">
        <h2>Registration</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone No."
            value={phn}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Event Name"
            value={eventname}
            onChange={(e) => setEventname(e.target.value)}
            disabled
            required
          />

          <input
            type="text"
            placeholder="Registration Fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            disabled
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
