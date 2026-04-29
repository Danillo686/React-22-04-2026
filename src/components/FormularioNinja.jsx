import { useState } from 'react';

export default function FormularioNinja({ aoRecrutar }) {
  const [nome, setNome] = useState('');
  const [rank, setRank] = useState('Genin');
  const [missao, setMissao] = useState(''); // Atividade 5

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoNinja = {
      id: Math.random(),
      nome,
      rank,
      missao, // Atividade 6
      aldeaNatal: 'Konoha', // Default para evitar erros
      jutsu: 'Não definido'
    };
    
    aoRecrutar(novoNinja);
    
    // Limpando campos
    setNome('');
    setRank('Genin');
    setMissao(''); // Atividade 5
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Nome do ninja" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <select value={rank} onChange={(e) => setRank(e.target.value)}>
        <option>Genin</option>
        <option>Chunin</option>
        <option>Jonin</option>
      </select>
      
      {/* Atividade 5 */}
      <input 
        placeholder="Missão atual (opcional)" 
        value={missao} 
        onChange={(e) => setMissao(e.target.value)} 
      />
      
      <button type="submit">Recrutar</button>
    </form>
  );
}