import { useState, useEffect } from 'react'; // Atividade 9
import './App.css';

import Header from './components/Header';
import ListaNinjas from './components/ListaNinjas';
import Rodape from './components/Rodape'; // Atividade 1
import FormularioNinja from './components/FormularioNinja';
import StatusAldeia from './components/StatusAldeia'; // Atividade 10
import { ninjasIniciais } from './dados/ninjas'; // Atividade 9

function App() {
  const [ninjas, setNinjas] = useState([]); // Atividade 9: Começa vazio
  const [busca, setBusca] = useState(""); // Atividade 4

  // Atividade 9: useEffect para carregar dados
  useEffect(() => {
    setNinjas(ninjasIniciais);
  }, []);

  // Atividade 7: Função para remover
  const removerNinja = (id) => {
    setNinjas(ninjas.filter(n => n.id !== id));
  };

  const adicionarNinja = (novoNinja) => {
    setNinjas([...ninjas, novoNinja]);
  };

  // Atividade 8: Variável Derivada (Filtro)
  const ninjasFiltrados = ninjas.filter(n => 
    n.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <Header />
      
      {/* Atividade 10 */}
      <StatusAldeia total={ninjas.length} />

      {/* Atividade 4: Busca */}
      <div style={{ margin: '20px' }}>
        <input 
          type="text" 
          placeholder="Buscar ninja..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <FormularioNinja aoRecrutar={adicionarNinja} />
      
      {/* Atividade 8: Passando a lista filtrada */}
      <ListaNinjas 
        ninjas={ninjasFiltrados} 
        onRemover={removerNinja} 
      />

      <Rodape /> {/* Atividade 1 */}
    </div>
  );
}

export default App;