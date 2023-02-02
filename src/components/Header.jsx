import {Link} from 'react-router-dom';
import LogoShop from '../assets/images/shoppingLogo.png';
import css from './Header.module.css';
import {app} from '../firebase-init';
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged,signInWithPopup } from 'firebase/auth';
import { Component } from 'react';

class Header extends Component{
    auth = getAuth(app);
    user = this.auth.currentUser;
    constructor(props){
        super(props);
        this.state={
            user:null,
            loading:false
        }
    }

    componentDidMount(){
        onAuthStateChanged(this.auth,(data) =>{
            this.setState({user:data});
        })
    }

    signIn = ()=>{
        this.setState({loading:true});
        signInWithPopup(this.auth,new GoogleAuthProvider()).then((data) => {
            this.setState({user:data.user,loading:false});     
        })
    }

    logOut = () =>{
        signOut(this.auth).then(() => {
            this.setState({user:null});
        })
    }
    render(){
        return(
            <div className="border-bottom p-3 mb-3">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link to='/'>
                        <img className={css.logo} src={LogoShop} alt='Shopping Logo'/>
                    </Link>
                    {this.state.user && <h6>{this.state.user.displayName}</h6>}
                    <div className={css['actions-wrapper'] + ' d-flex justify-content-between'}>
                        <Link to='/' className={css['text-customization']}>Home</Link>
                        <Link to='/about' className={css['text-customization']}>About</Link>
                        <Link to='/login' className={css['text-customization']}>Login</Link>
                    </div>
                    {
                        this.state.user ? 
                        <button onClick={() => this.logOut()}>Sign Out Firebase</button>
                        :
                        <button onClick={() => this.signIn()}>Sign In Firebase</button>
                    }
                    {this.state.loading && <h4>Loading...</h4>}
                </div>
            </div>
        )
    }
}
export default Header;