import {Link} from 'react-router-dom';
import LogoShop from '../assets/images/shoppingLogo.png';
import css from './Header.module.css';
import CartIcon from './CartIcon';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actions/user.actions';

function Header({user,signIn,signOut}){
    return(
        <div className="border-bottom p-3 mb-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to='/'>
                    <img className={css.logo} src={LogoShop} alt='Shopping Logo'/>
                </Link>
                {user && <h4 className='text-muted'>{(user.displayName).toUpperCase()}</h4>}
                <div className={css['actions-wrapper'] + ' d-flex justify-content-between'}>
                    <Link to='/' className={css['text-customization']}>Home</Link>
                    <Link to='/about' className={css['text-customization']}>About</Link>
                    {/*<Link to='/login' className={css['text-customization']}>Login</Link>*/}
                </div>
                {/*this.state.loading && <h4>Loading...</h4>*/}
                <div className='float-right'>
                {
                    user ? 
                    <button className='btn btn-outline-dark' onClick={() => signOut()}>Sign Out</button>
                    :
                    <button className='btn btn-outline-dark' onClick={() => signIn()}>Sign In</button>
                }
            </div>
                <CartIcon/>
            </div>
        </div>
    )
}

function mapPropsToState(state){
    return{
        user:state.userState.user
    };
}

function mapDispatchToProps(dispach){
    return{
        signIn: () => dispach(logIn()),
        signOut: () => dispach(logOut())
    }
}

export default connect(mapPropsToState,mapDispatchToProps)(Header);