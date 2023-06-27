import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Route, Routes} from 'react-router-dom'

import  HomeNav from './components/HomeNav';
import HomeTable from './components/HomeTable';
import CriarTarefa from './components/CriarTarefa';
import EditTarefa from './components/EditTarefa';


function App() {
  return (<>
  <div className="AppCrud">
    <HomeNav/>
    <Routes>
      <Route exact path='/' element={ <HomeTable/>}/>
      <Route exact path='/create' element={ <CriarTarefa/>}/>
      <Route exact path='/edit/:id' element={ <EditTarefa/>}/>

    </Routes>    
    </div>
    </>
  );
}

export default App;
