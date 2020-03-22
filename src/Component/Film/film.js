import React, { useEffect, useState } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { Card, StyledLink, P, Wrapper } from './style';
import logo from '../../poster.jpg';
import axios from 'axios';
import withNav from '../../hoc/index';

const Film = ({ toggleLoading }) => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const fetchFilms = async() => {
      toggleLoading(true);
      const rawData = await axios.get('https://ghibliapi.herokuapp.com/films');
      const data = rawData?.data || []
      setFilmList(data);
      toggleLoading(false);
    }
    fetchFilms();
  },[toggleLoading]);

  const renderFilm = () => {
    return (
      <Grid columns={4}>
        {
          filmList.map(data => {
            const { id, title } = data
            return (
              <Grid.Column key={id}>
                <Card>
                  <P>{title}</P>
                  <Wrapper>
                    <img src={logo} alt="logo"/>
                    <StyledLink to={`/Film-details/${id}`}>
                      <button>View Details</button>
                    </StyledLink>
                  </Wrapper>
                </Card>
              </Grid.Column>
            );
          })
        }
      </Grid>
    );
  }

  return (
    <Container style={{margin: '24px 0'}}>
      {renderFilm()}
    </Container>
  );
}

export default withNav(Film);