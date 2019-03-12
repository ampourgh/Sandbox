import React from 'react';
import Course from './Course';

const App = (props) => {
  return (
    <div className="container">
      {props.courses.map( course =>
        <Course
          /* a copy of the entirety of the course array */
          {...course}
          key={course.id}
        />
      )}
    </div>
  );
}

export default App;
