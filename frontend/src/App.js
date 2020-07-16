import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicRoute from "./Router";
import EntryAttributeForm from "./components/AddEntryForm";
import AddEntryView from "./view/AddEntryView";
import Demo from "./components/AddEntryDetailForm";

function App() {
  return (
      <div className='container'>
      <BasicRoute/>
      </div>
  );
}

// function App() {
//     return (
//       <Demo/>
//     );
// }


export default App;
