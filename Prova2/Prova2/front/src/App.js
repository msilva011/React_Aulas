import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import CriarPage from './pages/CriarPage';
import EditarPage from './pages/EditarPage';
function App() {
  return (
    <Routes>
      <Route path='/index' element={<IndexPage/>}/>
      <Route path='/criar' element={<CriarPage/>}/>
      <Route path='/editar/:id' element={<EditarPage/>}/>
      <Route path='*' element={<IndexPage/>}/>
    </Routes>
  );
}

export default App;
