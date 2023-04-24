import './App.css';
import freeCodeCampLogo from '../src/imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/boton';
import Contador from "./componentes/contador"
import { useState } from 'react';

function App() {

  const [numeroDeClics, setNumeroDeClics]= useState(0)

const manejarClic = () =>{
 setNumeroDeClics(numeroDeClics+1);
}

const reiniciarContador= () =>{
  console.log("reiniciar")
}

  return (
    <div className='App'>
      <div className='fcc-logo-contenedor'>
        <img 
        className='fcc-logo' 
        src={freeCodeCampLogo} 
        alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroDeClics = {numeroDeClics} />
        <Boton 
        texto="Click"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto="Reiniciar" 
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
