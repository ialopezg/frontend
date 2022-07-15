import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeColors } from "../helpers/ThemeColors";

export const LinkButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${ThemeColors.primary};
  border-radius: 25px;
  color: ${ThemeColors.primary};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${ThemeColors.primary};
    color: ${ThemeColors.theme};
    border: 3px solid ${ThemeColors.theme};
    cursor: pointer;
  }
`;
