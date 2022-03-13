import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

export default function header() {
  return (
        <nav>
            <Link to="/" className="logo">AyudaPro</Link>
            
            <ul className="links">
                <Link to="/secundaria" className="link-item">Secundaria</Link>
                <Link to="/universitario" className="link-item">Voluntariado</Link>
            </ul>

            <ul className="buttons">
                <li className="button-item"><a href="">Iniciar sesion</a></li>
                <li className="button-item"><a href="">Registrar</a></li>
            </ul>
        </nav>

  )
}
