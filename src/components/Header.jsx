import {Link} from 'react-router-dom';
import LogoShop from '../assets/images/shoppingLogo.png';
import css from './Header.module.css';

function Header(){
    return(
        <div className="border-bottom p-3 mb-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to='/'>
                    <img className={css.logo} src={LogoShop} alt='Shopping Logo'/>
                </Link>
                <div className={css['actions-wrapper'] + ' d-flex justify-content-between'}>
                    <Link to='/' className={css['text-customization']}>Home</Link>
                    <Link to='/about' className={css['text-customization']}>About</Link>
                    <Link to='/login' className={css['text-customization']}>Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Header;