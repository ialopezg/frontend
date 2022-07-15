import styled from "styled-components";
import { Props } from "./helpers/Props";

export const Avatar = styled.div<Props>`
  width: ${(props) => props.width || 85}px;
  height: ${(props) => props.height || 85}px;
  border-radius: ${(props) => props.radius || 50}px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;