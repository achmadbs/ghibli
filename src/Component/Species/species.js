import React, { useState, useEffect } from 'react';
import withNav from '../../hoc/index';
import axios from 'axios';
import logo from '../../question.png';
import { Grid, Container, Image } from 'semantic-ui-react';
import { Cards } from '../../style';

const Species = ({ toggleLoading }) => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      toggleLoading(true);
      const rawData = await axios.get('https://ghibliapi.herokuapp.com/species');
      const data = rawData?.data || [];
      setSpecies(data);
      toggleLoading(false);
    }
    fetchData();
  },[toggleLoading]);

  const renderLocationList = () => {
    return (
      <Grid columns={3}>
        {
          species.map(item => {
            const { id, name, classification, eye_colors, hair_colors } = item;
            return (
              <Grid.Column key={id}>
                <Cards>
                  <Image src={logo} wrapped ui={false} />
                  <Cards.Content>
                    <Cards.Header>{name}</Cards.Header>
                    <Cards.Description>
                      Classification: {classification} <br/>
                      Eye Colors: {eye_colors} <br/>
                      Hair Colors: {hair_colors}
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

export default withNav(Species);