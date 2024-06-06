import React from 'react';
import PropTypes from 'prop-types';
import EventCard from "./EventCard";
import { eventList } from './database/EventDatabase';
import "./style/SearchEventList.css";

const SearchEventList = ({ monthYear }) => {
    React.useEffect(() => {
    }, []);
    const { selectedMonth, selectedYear } = monthYear;
    const filteredEvents = eventList.filter((eventDetail) => {
        return (
            eventDetail.date.year === selectedYear &&
            eventDetail.date.month === selectedMonth
        );
    });

    const renderEventCards = () => {
        return filteredEvents.map(({ id, date, heading, location, img }) => {
            return (
                <EventCard
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                />
            );
        });
    };

    return (
        <>
            {filteredEvents.length > 0 ? (
                renderEventCards()
            ) : (
                <p>No Events in the date</p>
            )}
        </>
    );
};

SearchEventList.propTypes = {
    monthYear: PropTypes.shape({
        selectedMonth: PropTypes.number.isRequired,
        selectedYear: PropTypes.number.isRequired
    }).isRequired
};

export default SearchEventList;
