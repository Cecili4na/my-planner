import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons/faSackDollar';

const Header = () => {
    return(
        <header className="header_conteiner">
            <FontAwesomeIcon icon={faSackDollar} color="#7AF1a7" size="2x"/>
            <h2>Finanças</h2>
        </header>
    )
}

export default Header;