import { useParams } from "react-router-dom";
import { eventList } from "./database/EventDatabase.js";
import Navigation from "./Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./style/EventDetails.css";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  const filteredEvent = eventList.find((eventDetail) => eventDetail.id === numId);
  const navigate = useNavigate();
  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              
              <span className="font-weight-med">{filteredEvent.date.month}</span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">{filteredEvent.description}</span>
          </p>
          <p className="description">
            <span className="description-heading">Event Registration Fees:</span>
            <span className="description-heading-para">{filteredEvent.fee}</span>
          </p>
          <p className="description">
            <span className="description-heading">PRICE:</span>
            <span className="description-heading-para"dangerouslySetInnerHTML={{
            __html: filteredEvent.price.replace(
                "First Runner Up",
                "First Runner Up<br>"
            ),
            }}></span>
          </p>
          <button className="register-button" type="submit" onClick={() => navigate(`/Registration?eventName=${filteredEvent.heading}&fee=${filteredEvent.fee}`)}>Register</button>

        </div>
      </div>
    </div>
  );
};

export default EventDetails;
