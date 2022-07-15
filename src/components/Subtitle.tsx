import styled from "styled-components";

import { Props } from "./helpers/Props";
import { ThemeColors } from "./helpers/ThemeColors";

export const Subtitle = styled.p<Props>`
  font-size: ${(props) => props.size || 27}px;
  text-align: center;
  color: ${(props) => props.color || ThemeColors.primary};
  padding: 5px;
  margin-bottom: 25px;
`;
