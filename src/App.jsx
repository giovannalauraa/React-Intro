// import { useState } from 'react' --> não é "necessário"
// import React from 'react' --> não é "necessário"
import './App.css'
// import Planetas from './componentes/Planetas' 
// import Galeria from './componentes/Planetas.jsx'
import Galeria, { Terra, Justi, Manoel, Adms } from './componentes/Planetas.jsx' // como vou importar 2 itens coloco os outros em evidência dentro das: { }

function App() {
 
  return (
    <>
    <section>
      <h1>Planetas incríveis</h1>
      <Galeria /> 
    </section>

    <section>
      <h1>Planeta Terra</h1>
      <Terra />
    </section>

    <section>
      <h1>Justi</h1>
      <Justi />
    </section>

    <section>
      <h1>Mano gomes e adm</h1>
      <Manoel />
      <Adms />
    </section>
    </>
  )
}

export default App
