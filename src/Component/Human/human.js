import React, { useState, useEffect } from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import logo from '../../placeholder.png'
import withNav from '../../hoc/index';
import axios from 'axios';
import { Cards } from '../../style';

const Human = ({ toggleLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    const fethData = async() => {
      toggleLoading(true);
      const rawData = await axios.get('https://ghibliapi.herokuapp.com/people');
      const humanData = rawData?.data || [];
      setData(humanData);
      toggleLoading(false);
    }
    fethData();
  },[toggleLoading]);

  const renderHumanList = () => {
    return (
      <Grid columns={5}>
        {
          data.map(item => {
            const { id, name, gender, age, eye_color, hair_color } = item
            return (
              <Grid.Column key={id}>
                <Cards>
                  <Image src={logo} wrapped ui={false} />
                  <Cards.Content>
                    <Cards.Header>{name}</Cards.Header>
                    <Cards.Meta>
                      <span className='date'>{gender}</span>
                    </Cards.Meta>
                    <Cards.Description>
                      Age: {age} <br/>
                      Eye Color: {eye_color} <br/>
                      Hair Color: {hair_color}
                    </Cards.Description>
                  </Cards.Content>
                </Cards>
              </Grid.Column>
            );
          })
        }
      </Grid>
    );
  }

  return (
    <Container style={{margin: '24px 0'}}>
      {renderHumanList()}
    </Container>
  );
}

export default withNav(Human);