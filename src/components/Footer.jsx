import css from './Footer.module.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className={css['footer-container']}>
            <Link to='/' className={css['text-customization']}>Home</Link>
            <Link to='/about' className={css['text-customization']}>About</Link>
            <Link to='/login' className={css['text-customization']}>Login</Link>
        </div>
    );
}
export default Footer;