import React, { useState, useEffect } from 'react';
import { Grid, Container, Image, Rating } from 'semantic-ui-react';
import logo from '../../poster.jpg'
import withNav from '../../hoc/index';
import axios from 'axios';
import { Cards } from '../../style';
import { P2, Title, Rate, P } from './style';
import { useParams } from 'react-router-dom';

const FilmDetails = ({ toggleLoading }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() =>{
    const fethData = async() => {
      toggleLoading(true);
      const rawDetails = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
      const details = rawDetails?.data || [];
      setData(details);
      toggleLoading(false);
    }
    fethData();
  },[toggleLoading, id]);

  const renderFilmDetails = () => {
    const { title, release_date, description, director, producer, rt_score } = data;
    const rating = rt_score / 10;
    return (
      <Cards style={{width: '100%', top: 0, transform: 'translateY(15%)'}}>
        <Cards.Content extra style={{backgroundColor: 'rgba(192, 192, 192, 0.2)',}}>
          <Grid>
            <Grid.Column width={5}>
              <Image src={logo}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Title>{`${title} `}({release_date})</Title>
              <P mid>{description}</P>
              <Rate>
                <Rating icon='star' rating={rating} maxRating={10}/>
                <P left>{rating} / 10</P>
              </Rate>
              <P2>Director: {director}</P2>
              <P2>Producer: {producer}</P2>
            </Grid.Column>
          </Grid>
        </Cards.Content>
      </Cards>
    );
  }

  return (
    <Container style={{margin: '24px 0', height: '100vh'}}>
      {renderFilmDetails()}
    </Container>
  );
}

export default withNav(FilmDetails);