import React, { useState, useEffect } from "react";

import RestaurantList from "../../components/RestaurantList/RestaurantList.component";

const Homepage = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [restaurants, setRestaurants] = useState([]);

  const savePositionToState = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  };

  const getData = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
    } catch (error) {
      console.log(error);
    }

    const res = await fetch(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${long}&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=pt_BR`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_API_HOST,
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    );
    const data = await res.json();
    setRestaurants(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, [lat, long]);

  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Homepage;
