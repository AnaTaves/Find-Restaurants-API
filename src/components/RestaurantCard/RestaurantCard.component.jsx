import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import * as S from "./RestaurantCard.styles";

import RestaurantPic from "../../assets/restaurante-fake.png";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  p: 4
};

const RestaurantCard = ({ restaurant }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {restaurant.name ? (
        <S.RestaurantCardContainer>
          <img
            src={
              restaurant.photo
                ? restaurant.photo.images.small.url
                : RestaurantPic
            }
            alt="foto restaurante"
          />
          <h1>{restaurant.name}</h1>
          <ReactStars
            count={5}
            value={restaurant.rating}
            edit={false}
            isHalf
            activeColor="#e7711c"
          />
          <p>{restaurant.location_string}</p>
          <p>{restaurant.ranking}</p>

          <div>
            <Button onClick={handleOpen}>Mais Informações</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <S.Img
                  src={
                    restaurant.photo
                      ? restaurant.photo.images.small.url
                      : RestaurantPic
                  }
                  alt="foto restaurante"
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {restaurant.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <h4>Endereço: </h4>
                  <small>{restaurant.address}</small>
                  <h4>Funcionamento:</h4>
                  <small>{restaurant.is_closed ? "Fechado" : "Aberto"}</small>
                  <h4>Telefone: </h4>
                  <small>{restaurant.phone}</small>
                  <h4>Website: </h4>
                  <small>
                    <S.Link href={restaurant.web_url}>Site</S.Link>
                  </small>
                  <h4>Distância: </h4>
                  <small>{restaurant.distance_string}</small>
                </Typography>
              </Box>
            </Modal>
          </div>
        </S.RestaurantCardContainer>
      ) : null}
    </>
  );
};

export default RestaurantCard;
