import React, { useState, useEffect } from 'react';
import withNav from '../../hoc/index';
import axios from 'axios';
import logo from '../../question.png';
import { Grid, Container, Image } from 'semantic-ui-react';
import { Cards } from '../../style';

const Vehicle = ({ toggleLoading }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      toggleLoading(true);
      const rawData = await axios.get('https://ghibliapi.herokuapp.com/vehicles');
      const data = rawData?.data || [];
      setVehicles(data);
      toggleLoading(false);
    }
    fetchData();
  },[toggleLoading]);

  const renderLocationList = () => {
    return (
      <Grid columns={3}>
        {
          vehicles.map(item => {
            const { id, name, description, vehicle_class, length } = item;
            return (
              <Grid.Column key={id}>
                <Cards>
                  <Image src={logo} wrapped ui={false} />
                  <Cards.Content>
                    <Cards.Header>{name}</Cards.Header>
                    <Cards.Description>
                      Description: {description} <br/>
                      Class: {vehicle_class} <br/>
                      Dimension: {length}
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
      {console.log(vehicles)}
    </Container>
  );
}

export default withNav(Vehicle);