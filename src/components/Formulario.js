import React,{useState} from 'react'

function Formulario({datosconsulta}){
  //ya no se ocupa state
  const [buscar, guardarBuscar] = useState({
    ciudad:'',
    pais: ''
  })


  const handleChange = e =>{
    // Camniar State
    guardarBuscar({
      ...buscar,
      [e.target.name]: e.target.value
    })

    
  }

  const consultarclima= e =>{
    e.preventDefault()

    //pasar al componente princippal la busqueda
    datosconsulta (buscar)

  } 


  return (
    <form
      onSubmit={consultarclima}
    >
      <div className="input-field col s12">
        <input 
        type="text"
        name="ciudad"
        id = "ciudad"
        onChange = {handleChange}
        />
        <label htmlFor ="ciudad">Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name ="pais">
          <option value="">Selecciona un País</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input type ="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima"/>
        </div>
      
    </form>
  )

}

export default Formulario