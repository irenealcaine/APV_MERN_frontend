import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import { useState } from "react"

const AdministrarPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <button
          type="button"
          className="bg-indigo-600 w-full mb-5 p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-800 cursor-pointer transition-colors md:hidden"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >{mostrarFormulario ? 'Ocultar formulario' : 'Mostrar formulario'}</button>
        <div className={`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
          <Formulario />
        </div>
        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
      </div>
    </>
  )
}

export default AdministrarPacientes
