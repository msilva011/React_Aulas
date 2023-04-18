import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ErroFound from './ErroFound';
import RandomApi from './RandomApi';


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element = {<Student imgMay= "https://avatars.githubusercontent.com/u/62021658?v=4" name="Mayara" email="rosa.mayara011"/>}/>
          <Route path="/random" element= {<RandomApi/>}/>
          <Route path="*" element={<ErroFound/>} />
        </Routes>
      </div>
  );
}


export default App;
