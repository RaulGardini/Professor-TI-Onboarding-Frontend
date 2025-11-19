import { useState } from 'react';
import './App.css';
import Header from './componentes/header/Header.jsx';
import Questions from './componentes/questions/Questions.jsx';
import Chat from './componentes/chat/Chat.jsx';

function App() {
  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);

  return (
    <>
      <Header />
      <div style={{height: '90vh', backgroundColor: '#102432', display: 'flex'}}>
        <Questions onPerguntaSelecionada={setPerguntaSelecionada} />
        <Chat perguntaSelecionada={perguntaSelecionada} />
      </div>
    </>
  );
}

export default App;