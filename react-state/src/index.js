import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// JSON placed in array called courses and imported
import courses from './course-data';

// courses sent to components/app.js
ReactDOM.render(
  <App courses={courses} />,
  document.getElementById('root')
);
