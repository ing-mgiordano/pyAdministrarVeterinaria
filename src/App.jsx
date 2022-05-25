import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => { // LS = localstorage
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []  // ?? devuelve la expresión del lado derecho del operador cuando la expresión del lado izquierdo es null o undefined . En caso contrario, devuelve la expresión del lado izquierdo
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])  // si paso un arreglo vacio [], se va a ejecutar una sola vez

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
        
      />

      <div className=" mt-12 flex">
        <Formulario
          pacientes={ pacientes }
          setPacientes={ setPacientes }
          paciente={ paciente }
          setPaciente={ setPaciente }
          />

        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
          eliminarPaciente={ eliminarPaciente }
        />
      </div>

    </div>
  )
}

export default App
