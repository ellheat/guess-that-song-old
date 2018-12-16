import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import { colors } from '../../../../theme/styled';


const getColor = (props) => {
  const { disabled, color } = (props);

  if (disabled) {
    return colors.gray;
  }

  return color;
};


export const Container = styled.li`
  width: 200px;
  height: 200px;
  border: 3px solid ${getColor};
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
  
  a {
    color: ${getColor};
  }
`;

export const Link = styled(ReactLink)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
`;
