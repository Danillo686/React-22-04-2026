// Adicionando as props e a função de remover
export default function CardNinja({ ninja, onRemover }) {
  return (
    <div className="card-ninja" style={{ border: '1px solid #444', margin: '10px', padding: '10px' }}>
      <h3>{ninja.nome}</h3>
      <p>Rank: {ninja.rank}</p>
      <p>Aldeia: {ninja.aldeaNatal}</p> {/* Atividade 2 */}
      <p>Jutsu: {ninja.jutsu}</p> {/* Atividade 3 */}
      
      {/* Atividade 6: Renderização Condicional */}
      <p>
        {ninja.missao ? `Missão: ${ninja.missao}` : "Nenhuma missão ativa"}
      </p>

      {/* Atividade 7: Botão de Expulsar */}
      <button 
        onClick={() => onRemover(ninja.id)}
        style={{ backgroundColor: '#b52a1a', color: 'white', cursor: 'pointer' }}
      >
        Expulsar da Vila
      </button>
    </div>
  );
}