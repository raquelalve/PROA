import {Link} from 'react-router-dom'
import styles from '../css/Header.module.css';
import Logo from "../Imagens/viagens.jpg";
import Lupa from "../Imagens/lupa.png";

function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logotipo da agência de viagens" className={styles.logo_agencia}/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Aruba'>Aruba</Link></li>
                <li><Link to='/Escocia'>Escocia</Link></li>
                <li><Link to='/Muralhas'>Muralhas da China</Link></li>
                <li><Link to='/GrandCanyon'>Grand Canyon</Link></li>
            </ul>

            <div className={styles.pesquisa}>
                <input type="search" className={styles.busca}/>
                <img src={Lupa} alt="lupa" className={styles.lupa}/>
            </div>
        </header>
    );
}

export default Header;