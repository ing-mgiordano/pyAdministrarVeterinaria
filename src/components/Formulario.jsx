import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  useEffect(() => {

  }, [])

  const generarID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validacion de formulario

    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      console.log('Hay algun campo vacio')
      setError(true)
      return
    }
    
    setError(false) 
    /* si no se completo bien el formulario seterror cambia a true, pero una vez q se completo bien tiene que volver a false */
    
    //objeto de Pacientes 

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id) {
      //editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ?
        objetoPaciente : pacienteState )
      
      setPacientes(pacientesActualizados)
      setPaciente({})
    }

    if(!paciente.id) {
      //nuevo registro
      objetoPaciente.id = generarID()
      setPacientes([...pacientes, objetoPaciente])
    }
    //genero una copia del pacientes y le agrego un nuevo paciente con objetoPaciente
    //de esta forma no se modifica el array original

    //reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  
  }

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Añadir Paciente y {' '}
            <span className=" text-indigo-700 font-bold">
              Administralos
            </span>
          </p>

          <form 
            onSubmit={ handleSubmit }
            className=" bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
          >
            {/* significa que: si error es true se imprime el mensaje */}
            { error &&  <Error>
                          <p>Todos los campos son obligatorios</p>
                        </Error>
            } 
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                Nombre Mascota
              </label>
              <input
                id="mascota"
                type="text" 
                placeholder="Nombre Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
              </label>
              <input
                id="propietario"
                type="text" 
                placeholder="Nombre Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
              </label>
              <input
                id="email"
                type="email" 
                placeholder="Email contacto Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Alta
              </label>
              <input
                id="alta"
                type="date" 
                className="border-2 w-full p-2 mt-2  placeholder-sky-800 rounded-md"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value) }
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                Sintomas
              </label>
              <textarea 
                id="sintomas"
                placeholder="Describe los Sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-sky-800 rounded-md"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value) }
              />
            </div>

            <input 
              type="submit"
              className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-900 transition-colors cursor-pointer rounded-full "
              value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />
          </form>
      </div>
  )
}

export default Formulario
