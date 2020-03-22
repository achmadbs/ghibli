import React, { useState } from 'react';
import { Button, Container, Form, Grid, Header, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

const Dashboard = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: ''
  });
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isErrorPass, setErrorPass] = useState(false);

  const handleSetValue = name => e => {
    const { value } = e.target;
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    setInputVal({
      ...inputVal,
      [name]: value
    });
    switch(name) {
      case 'email':
        setErrorEmail(!regex.test(value), true);
        break;
      case 'password':
        setErrorPass(value.length <= 6, true);
        break;
      default:
        break;
    }
  }

  const renderLabelEmailError = () => {
    return (
      <Label basic color='red' pointing='below'>
        Gunakan format email yang sesuai
      </Label>
    );
  }

  const renderLabelPassError = () => {
    return (
      <Label basic color='red' pointing='below'>
        Password harus 6 karakter atau lebih
      </Label>
    );
  }

  const { email, password } = inputVal;
  const disable = (!!isErrorEmail || !!isErrorPass) || (isEmpty(email) || isEmpty(password))
  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='red' textAlign='center'>
            Log-in untuk ke Dashboard
          </Header>
          <Form size='large'>
            <Segment stacked>
              {isErrorEmail && renderLabelEmailError()}
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                value={email}
                onChange={handleSetValue('email')}
                error={!!isErrorEmail}
              />
              {isErrorPass && renderLabelPassError()}
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={password}
                onChange={handleSetValue('password')}
                error={!!isErrorPass}
              />
              <Link to='/Home'>
                <Button color="red" fluid size='large' disabled={disable}>
                  Login
                </Button>
              </Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Dashboard;
