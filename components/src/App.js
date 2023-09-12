import './App.css';
import OlaMundo from './OlaMundo';
import Frases from './Frases'
import DigaMeuNome from './DigaMeuNome';


function App() {
  return (
    <div className="App">
      <header>
        <OlaMundo />

      </header>
      <Frases />
      <DigaMeuNome nome="Eric" idade="17" profissao="Jogador"/>
    </div>
  );
}

export default App;
