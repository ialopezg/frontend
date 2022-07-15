import styled from "styled-components";
import { Props } from "../helpers/Props";
import { ThemeColors } from "../helpers/ThemeColors";

export const Button = ({ children }: any) => {
  return <FormButton>{children}</FormButton>;
};

export const FormButton = styled.button<Props>`
  padding: 10px;
  width: ${(props) => props.width || 250}px;
  background-color: ${(props) => props.bg || 'transparent'};
  text-transform: ${(props) => props.transform || 'none'};
  font-size: ${(props) => props.size || 16}px;
  border: 2px solid ${ThemeColors.theme};
  border-radius: 2rem;
  color: ${(props) => props.color || ThemeColors.theme};
  text-align: center;
  font-weight: bold;
  transition: ease-in-out 0.3s;
  
  &:hover {
    background-color: ${ThemeColors.theme};
    color: ${ThemeColors.primary};
    cursor: pointer;
  }
`;
