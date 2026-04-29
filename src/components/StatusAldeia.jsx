export default function StatusAldeia({ total }) {
  let mensagem = "";

  if (total === 0) {
    mensagem = "A vila está vazia!";
  } else if (total <= 3) {
    mensagem = "Precisamos de mais ninjas.";
  } else if (total <= 7) {
    mensagem = "Time pronto para missões!";
  } else {
    mensagem = "Grande esquadrão em ação!";
  }

  return (
    <div style={{ margin: '10px 0', fontWeight: 'bold', color: '#e8650a' }}>
      <p>Status: {mensagem} ({total} ninjas)</p>
    </div>
  );
}