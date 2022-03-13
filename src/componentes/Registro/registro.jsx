import React from 'react'
import '../../componentes/login/login.css'
export default function registro() {
  return (
    <div className="form-container">
    <h1>Registro de usuario</h1>

    <form action="">
        <input type="text" placeholder='Nombre' required="true"/>
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Edad' required="true"/>
        <input type="text" placeholder='Correo electrónico' required="true"/>
        <input type="password" placeholder='Contraseña' required="true"/>
        <select name="" id="">
          <option >Carrera interesada</option>
          <option value="">Ingeniería industrial</option>
          <option value="">Carrera interesada</option>
        </select>
        <select name="" id="">
          <option >Institucion de procedencia</option>
          <option value="">Cibertec</option>
          <option value="">Universidad privada del norte</option>
        </select>
        <select name="" id="">
          <option >Tipo de estudiante</option>
          <option value="">Escuela secundaria</option>
          <option value="">Universitaria</option>
        </select>
        <input type="submit"/>
    </form>

</div>
  )
}
