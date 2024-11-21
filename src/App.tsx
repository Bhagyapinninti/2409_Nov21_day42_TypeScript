import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';


function App() {
  
  return (
    <div className="App">
      <h1>Type Script</h1>
      <Table name="Jack" engMarks="90" telMarks="91" hinMarks="92" matMarks="93" sciMarks="94" socMarks="95" result="pass" TotalMarks="600" gainedMarks="555"
      maxMarks="100"></Table>
      <Table name="Rose" engMarks="80" telMarks="81" hinMarks="82" matMarks="83" sciMarks="84" socMarks="85" result="pass" TotalMarks="600" gainedMarks="495"
      maxMarks="100"></Table>
      <Table name="Peter" engMarks="70" telMarks="71" hinMarks="72" matMarks="73" sciMarks="74" socMarks="75" result="pass" TotalMarks="600" gainedMarks="435"
      maxMarks="100"></Table>
    </div>
  );
}

export default App;
