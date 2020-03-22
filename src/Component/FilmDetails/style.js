import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
});

export const Title = styled.p({
  fontSize: 32,
  fontWeight: 'bold',
  color: 'rgba(0, 0, 0, 0.6)'
});

export const Rate = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '3em 0',
  height: 30
});

export const P = styled.p(props=> ({
  textAlign: props.mid? 'justify' : 'center',
  paddingLeft: props.left? '1em' : '',
  fontSize: 20
}));

export const P2 = styled.p({
  fontSize: 20
});