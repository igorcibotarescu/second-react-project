import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/about' element = {<About/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route path='*' element = {<NotFound/>}/>
        <Route exact path='/category/:categoryClass' element = {<Category/>}/>
      </Routes>
    </>
  );
}

export default App;
