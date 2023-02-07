import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import { Component } from 'react';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { userLoaded } from './redux/actions/user.actions';
import { connect } from 'react-redux';
class App extends Component {

  componentDidMount(){
    this.props.initData();
  }

  render(){
    return (
      <>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/login' element = {<Login/>}/>
          <Route path='*' element = {<NotFound/>}/>
          <Route exact path='/category/:categoryClass' element = {<Category/>}/>
          <Route exact path='/products/:category/:productId' element= {<Product/>}></Route>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    initData: () => dispatch(userLoaded())
  }
}

export default connect(null, mapDispatchToProps)(App);