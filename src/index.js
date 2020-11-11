import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridComp from './components/GridComp';

// data is passed in as JSON like this:
// uncomment to see the data passed in 👇
// const data = {
//   "id": "value1",
//   "id2": "value2",
//   "id3": "value3",
//   "id4": "value4"
// }

// placeholder if we are not passing in data
const data = {}

ReactDOM.render(
  <div>
    <GridComp data={data}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

