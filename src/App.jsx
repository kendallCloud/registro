import '../src/styles.scss';
import { useForm } from "react-hook-form";
import { useState } from 'react'

import {padron} from './data'

export default function App() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    const [tableData, setTableData] = useState([])
   
  const onSubmit = (data) => {
    const filteredData = padron.filter((item) => {
      return item.cedula === data.cedula || item.nombre === data.nombre || item.apellidoPaterno === data.apellidoPat || item.apellidoMaterno === data.apellidoMat
    })
    setTableData(filteredData)
  }
  return (
    <>
      <img style={{ maxWidth: '50%', paddingLeft:'25%'}} src="https://upload.wikimedia.org/wikipedia/commons/4/40/Logo_Tribunal_Supremo_de_Elecciones_de_Costa_Rica.svg" alt="SVG LOGO" />
      <div className='row'>
        <div className='module-border-wrap'>
          < form className = "centeredDiv" onSubmit={handleSubmit(onSubmit)} >
            <h2>Consulta de registro de ciudadanos</h2>
            <input type="text" defaultValue='' {...register("cedula")}  placeholder="Ingrese el número de cédula" />
            <input type="text" defaultValue='' {...register("nombre")} placeholder="Ingrese nombre de la persona" />
            <input type="text" defaultValue='' {...register("apellidoMat")} placeholder="Ingrese el apellido materno" />
            <input type="text" defaultValue='' {...register("apellidoPat")} placeholder="Ingrese el apellido paterno" />
            <button>Buscar</button>
          </form>
        
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.cedula}</td>
                <td>{item.nombre}</td>
                <td>{item.apellidoPaterno}</td>
                <td>{item.apellidoMaterno}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
    </>
  );
}

