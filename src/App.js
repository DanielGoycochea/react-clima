import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'




function App() {

  const [ciudad, setCiudad] = useState ('');
  const [pais, setPais] = useState(''); 
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState({})

  useEffect(()=>{

    if(ciudad==='') return;

    const consultarAPI = async () =>{

     
  
      const appID = process.env.REACT_APP_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
  
      // consultar URL
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado)
  
    }


    consultarAPI()
  },[ciudad, pais])

  const datosconsulta = datos =>{
    
    //validar si hay datos
    if(datos.ciudad === "" || datos.pais===""){
      setError(true)
      return
    }
    
    setCiudad(datos.ciudad)
    setPais(datos.pais)
    setError(false)



  }



  // Cragar un copmnponente con condicion

  let componente

  if(error){
    //hay un error mostarr 
    componente = <Error mensaje="Ambos campos son obligatorios"/>

  } else if(resultado.cod ==="404"){
    componente= <Error mensaje="No existe la ciudad" />

  } else{
    // no hay errores
    componente= <Clima
      resultado ={resultado}
    />
  }


  return (
    <div className="App">
      <Header titulo='React Clima'/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
              datosconsulta={datosconsulta}
              />
            
            </div>
            <div className="col 12m m6">
                {componente}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
