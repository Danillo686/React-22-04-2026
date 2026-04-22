import { useState } from 'react'
import './App.css'
import Rodape from './components/Rodape'  
import CardNinja from './components/CardNinja' 

function App() {
  const [ninjas, setNinjas] = useState([
    { id: 1, nome: 'Naruto Uzumaki', jutsu:'Rasengan' , rank: 'Genin' },
    { id: 2, nome: 'Sasuke Uchiha', jutsu:'Chidori' , rank: 'Genin' },
    { id: 3, nome: 'Sakura Haruno', jutsu:'Punho' , rank: 'Chunin' },
    { id: 4, nome: 'Kakashi Hatake', jutsu:'Sharingan' , rank: 'Jonin' },
    { id: 5, nome: 'Rock Lee', jutsu:'Nenhum' , rank: 'Genin' },
  ])

  return (
    <div>
      <CardNinja aldeaNatal="Folha" />
      <Rodape/>
    </div>
  )
}

export default App