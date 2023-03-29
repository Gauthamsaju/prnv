import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {  Routes,Route } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Viewstd from './components/Viewstd';
import Add from './components/Add';

function App() {
  return (
    <div className="App">

      <Navbar />
    
     
      <Routes>

        <Route path={'/'} element={<Viewstd/>}>

        </Route>
        <Route path={'/Adds'} element={<Add data={{id:'',name:'',grade:''}} method="post"/>}>

        </Route>
        {/* <Route path={'/add'} element={<Addstudent/>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
