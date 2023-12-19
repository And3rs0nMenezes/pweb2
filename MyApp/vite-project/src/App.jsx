import { useState } from 'react';

function App() {
  const [] = useState(0);

  return (
    <>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h2>Informações Pessoais</h2>
        <p style={{ margin: '5px 0' }}>Nome: Anderson</p>
        <p style={{ margin: '5px 0' }}>Idade: 23 anos</p>
        <p style={{ margin: '5px 0' }}>Nacionalidade: Brasileiro</p>
        <p style={{ margin: '5px 0' }}>Natural: Ceará</p>
      </div>
    </>
  );
}

export default App;