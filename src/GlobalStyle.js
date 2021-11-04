import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: "Roboto, sans-serif";
  background-color: #00000014;
  text-align: center;
}
`;

export const LogoImg = styled.img`
  display: block;
  margin: 22px auto;
  width: 300px;
`;
