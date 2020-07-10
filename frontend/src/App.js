import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicRoute from "./Router";
import EntryAttributeForm from "./components/AddEntryForm";
import AddEntryView from "./view/AddEntryView";

function App() {
  return (
      <div className='container'>
      <BasicRoute/>
      </div>
  );
}


export default App;
