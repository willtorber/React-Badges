import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badge
      firstName="William"
      lastName="Torres"
      avatarUrl="https://www.gravatar.com/avatar?d=identicon"
      jobTitle="Software Engineer"
      twitter="willtorber"
    />,
    container
  );