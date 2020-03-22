import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Film from './Component/Film/film';
import Home from './Component/Home/home';
import Human from './Component/Human/human';
import Location from './Component/Location/location';
import Species from './Component/Species/species';
import Vehicle from './Component/Vehicle/vehicle';
import FilmDetails from './Component/FilmDetails/filmDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/Home' exact component={Home}/>
        <Route path='/Film' exact component={Film}/>
        <Route path='/Film-details/:id' exact component={FilmDetails}/>
        <Route path='/Human' exact component={Human}/>
        <Route path='/Location' exact component={Location}/>
        <Route path='/Species' exact component={Species}/>
        <Route path='/Vehicle' exact component={Vehicle}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
