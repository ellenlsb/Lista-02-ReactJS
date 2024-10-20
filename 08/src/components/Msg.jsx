import React from 'react'

const Mensagem = ({ isDay }) => {
  return (
    <div>
      {isDay ? 'Bom dia' : 'Boa noite'}
    </div>
  )
}

export default Mensagem
