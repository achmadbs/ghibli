import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

export const Cards = styled(Card)({
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.1)'
  }
});