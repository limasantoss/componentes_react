import './App.css'
import MeuComponente from './Meucomponente';
import MensagemFinal from './MensagemFinal';
import OutroComponente from './OutroComponente';
import Contador from './Contador';
function App() {
  return(
    <div>
      <h1>Componentes React</h1>
      <MeuComponente/>
      <OutroComponente/>
      <MensagemFinal/>
      <Contador/>
    </div>
  )
}
export default App;