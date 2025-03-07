import './App.css'
import Header from './components/Header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import FinanceControl from './components/Header/FinanceControl';

function App() {
 
  return (
    <div>
      <div className="header_container">
        <Header />
        <FontAwesomeIcon icon={faMoneyBillWave} color="#7AF1a7" size="2x"/>
        
      </div>
    </div>
    
  )
}

export default App