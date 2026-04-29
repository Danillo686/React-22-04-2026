import CardNinja from './CardNinja';

export default function ListaNinjas({ ninjas }) {
  return (
    <div className="lista-ninjas">
      {ninjas.map((ninja) => (
        <CardNinja key={ninja.id} ninja={ninja} />
      ))}
    </div>
  );
}