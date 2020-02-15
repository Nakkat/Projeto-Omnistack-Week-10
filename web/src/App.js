import React, { useEffect, useState } from 'react';
import api from './services/api';

// Import dos Css
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

//DevItem e DevForm

import DevItem from './components/DevItem';
import DevForm from './components/DevForm'

//  { useState } { useEffect } 
// import logo from './logo.svg';
// import './App.css';

//Componente - Bloco isolado de HTML, CSS e JS, o qual não interferem na mesma aplicação
//Propriedade -  Informações que um componente pai passa para o componente filho
//Estado - Informações mantidas pelo componente (Lembrar: imutabilidade)

// Conceitos básicos, adcionar +1 ao contador
// function App() {
//   const [counter, setCounter] = useState(0);

//   function IncrementCounter() {
//       setCounter(counter+1);
//   }
//   return (
//     <>
//       <h1>Contador: {counter} </h1>
//       <button onClick={IncrementCounter}>Incrementar</button>
//     </>
//     );  
// }

function App() {
  const [devs, setDevs] = useState([]);

  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data);
    }      
    loadDevs();
  }, []);

  async function handleAddDev(data){
    const response = await api.post('/devs', data)
      
    setDevs([...devs, response.data])
   }
   
  return (
    <div id="app">

      <aside>

        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
          
        </ul>

      </main>

    </div >
  );
}

export default App;
