import React from 'react'
import Mensagem from './components/Msg' 

function App() {
  const isDay = true 

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Mensagem isDay={isDay} />
    </div>
  )
}
''
export default App