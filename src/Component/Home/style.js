import styled from 'styled-components';

export const NavBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4em',
  border: '1x solid #red',
  backgroundColor: '#b3daff',
  'li': {
    paddingRight: 100,
    listStyle: 'none',
    fontSize: 24,
  },
  'button':{
    backgroundColor: '#b3daff',
    color: 'white',
    borderRadius: 60,
    border: 'none',
    cursor: 'pointer'
  },
  'button:hover':{
    transform: 'scale(1.2)',
    fontWeight: 'bold'
  },
  'button:focus':{
    outline: 'none',
    fontWeight: 'bold',
    transform: 'scale(1.2)'
  }
});