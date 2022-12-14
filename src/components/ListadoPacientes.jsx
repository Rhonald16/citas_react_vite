import {useEffect} from 'react'
import Paciente from "./Paciente"

// rafce 


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){
      console.log('Nuevo Paciente')
    }
    
  }, [pacientes])
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {/* Comprobar si hay pacientes  */}
      {pacientes && pacientes.length ? 
      (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

            {/* Iterar pacientes con map */}
          {pacientes.map( paciente => (
          
            <Paciente
              key = {paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))
          }
        </>

      ) : (

        <>
           <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
              <span className="text-indigo-600 font-bold">Agregar Pacientes</span>
            </p>
        </>

      )
      }

    </div>
        
  )} //Cierre ListadoPacientes

export default ListadoPacientes