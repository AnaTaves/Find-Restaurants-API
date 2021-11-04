import React from "react";

import Homepage from "./pages/Homepage/Homepage.component";

import Logo from "./assets/logo.svg";

import * as S from "./GlobalStyle";

export default function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.LogoImg src={Logo} alt="logo" />
      <small>Encontre os restaurantes mais próximos de você!</small>
      <Homepage />
    </>
  );
}
