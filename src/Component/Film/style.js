import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div({
  width: '100%',
  height: '100%',
  borderRadius: 20,
  border: '1px solid #bdbdbd',
  boxShadow: '7px 10px 5px 0px rgba(0,0,0,0.2)',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  '&:hover': {
    textDecoration: 'none',
    color: 'black'
  }
});

export const P = styled.p({
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: 8
})

export const Text = styled.p({
  wordWrap: 'break-word',
  padding: '0 16px 8px'
});

export const Footer = styled.div({
  borderTop: '1px solid',
  backgroundColor: 'white',
});

export const Wrapper = styled.div({
  textAlign: 'center',
  verticalAlign: 'center',
  width: '100%',
  'img':{
    width: '100%',
    objectFit: 'scale-down',
    padding: '0 16px',
    boxSizing: 'border-box'
  },
  'button':{
    borderRadius: 20,
    margin: '16px 0',
    fontSize: 20,
    cursor: 'pointer'
  },
  'button:hover':{
    transform: 'scale(1.2)'
  },
  'button:focus':{
    outline: 'none'
  }
})