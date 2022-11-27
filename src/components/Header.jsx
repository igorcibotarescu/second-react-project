import css from './Header.module.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className={css['nav-container']}>
        <h1 className={css['display-in-line-block']}>Telecad</h1>
        <div className={css['display-in-line-block']}>
            <Link to='/' className={css['link-buttons']}>Home</Link>
            <Link to='/about' className={css['link-buttons']}>About</Link>
            <Link to='/login' className={css['link-buttons']}>Login</Link>
        </div>
        </div>
    );
}
export default Header;