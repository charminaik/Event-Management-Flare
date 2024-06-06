import React from "react";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      url: "/sing.png",
      title: "MELODIA",
    },
    {
      id: 2,
      url: "/onstage.jpg",
      title: "AMETHYST",
    },
    {
      id: 3,
      url: "/cook.png",
      title: "Daawat-E-Dastoor 3.0",
    },
    {
      id: 4,
      url: "/dance.png",
      title: "ABLAZE",
    },
    {
      id: 5,
      url: "/idol.png",
      title: "N'ZEST",
    },
    {
      id: 6,
      url: "/act.png",
      title: "EMOTIONS",
    },
  ];
  React.useEffect(() => {
    // Your useEffect logic here, if needed
  }, []);
  return (
    <>
      <div className="services container">
        <h2>OUR EVENTS</h2>
        <div className="banner">
          {eventsData.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;