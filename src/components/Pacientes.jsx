
const Pacientes = ({paciente, setPaciente , eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('El paciente se eliminara...')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-tl-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className=" font-normal normal-case">{ nombre }</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className=" font-normal normal-case">{ propietario }</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className=" font-normal normal-case">{ email }</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className=" font-normal normal-case">{ fecha }</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className=" font-normal normal-case">{ sintomas }</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-5 bg-indigo-600 hover:bg-green-600 text-white font-bold uppercase rounded-full"
          onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button 
          type="button"
          className="py-2 px-5 bg-indigo-600 hover:bg-red-700 text-white font-bold uppercase rounded-full"
          onClick={handleEliminar}
        >Dar de Alta</button>
      </div>

    </div>
  );
};

export default Pacientes;
