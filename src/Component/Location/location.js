import React, { useState, useEffect } from 'react';
import withNav from '../../hoc/index';
import axios from 'axios';
import logo from '../../map.png';
import { Grid, Container, Image } from 'semantic-ui-react';
import { Cards } from '../../style';

const Location = ({ toggleLoading }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      toggleLoading(true);
      const rawData = await axios.get('https://ghibliapi.herokuapp.com/locations');
      const data = rawData?.data || [];
      setLocation(data);
      toggleLoading(false);
    }
    fetchData();
  },[toggleLoading]);

  const renderLocationList = () => {
    return (
      <Grid columns={6}>
        {
          location.map(item => {
            const { id, name, climate, terrain, surface_water } = item;
            return (
              <Grid.Column key={id}>
                <Cards>
                  <Image src={logo} wrapped ui={false} />
                  <Cards.Content>
                    <Cards.Header>{name}</Cards.Header>
                    <Cards.Description>
                      Climate: {climate} <br/>
                      Terrain: {terrain} <br/>
                      Surface Water: {surface_water}
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
      {renderLocationList()}
    </Container>
  );
}

export default withNav(Location);