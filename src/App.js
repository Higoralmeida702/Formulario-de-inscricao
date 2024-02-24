import InputEmail from './componentes/inputEmail';
import './style.css'

import Imagem from './componentes/imagem';
import TextoForm from './componentes/textoform';

function App() {
  return (
    <div className="container">
      <div className="conteudo">
        <div className="text-email">
          <TextoForm/>
          <InputEmail />
          
        </div>
        <div className="image-container">
          <Imagem/>
        </div>
      </div>
    </div>
  );
}

export default App;