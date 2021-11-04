import styled from "styled-components";

export const RestaurantCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  h1,
  p {
    margin: 10px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 50%;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000000;
`;

export const Img = styled.img`
  display: block;
  width: 250px;
  margin: 0 auto;
`;
