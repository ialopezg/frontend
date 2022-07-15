import styled from "styled-components";

import { Props } from "../helpers/Props";

import background from '../../assets/images/background.jpg';

export const MainContainer = styled.section<Props>`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)), url(${background}
  );
  background-size: cover;
  background-attachment: fixed;
`;
