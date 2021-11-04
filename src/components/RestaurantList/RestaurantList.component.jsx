import React from "react";
import { v4 as uuidv4 } from "uuid";

import RestaurantCard from "../RestaurantCard/RestaurantCard.component";

import * as S from "./RestaurantList.styles";

const RestaurantList = ({ restaurants }) => {
  return (
    <S.RestaurantListContainer>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={uuidv4()} restaurant={restaurant} />
      ))}
    </S.RestaurantListContainer>
  );
};

export default RestaurantList;
