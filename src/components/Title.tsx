import styled from 'styled-components';

import { ThemeColors } from './helpers/ThemeColors';
import { Props } from './helpers/Props';

export const Title = styled.h2<Props>`
  font-size: ${(props) => props.size || 65}px;
  text-align: center;
  color: ${(props) => props.color || ThemeColors.primary};
  padding: 5px;
  margin: 4rem 0 2rem 0;
  text-transform: ${(props) => props.transform || "none"};
  letter-spacing: 0.4rem;
`;