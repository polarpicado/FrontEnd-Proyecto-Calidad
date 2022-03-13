import React, { useState } from 'react'
import './secundaria.css'
import {Link} from 'react-router-dom'
export default function Secundaria() {
    const [carreras,setCarreras] =useState([
        {
            id:1,
            nombre:"Ing. de sistemas",
            desc:"loremloremloremloremloremloremloremoreloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:2,
            nombre:"Ing. industrial",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:3,
            nombre:"Ing. de sistemas",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:4,
            nombre:"Ing. de sistemas",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:5,
            "nombre":"Ing. de sistemas",
            "desc":"loremloremloremloremloremloremloremloremloremloremlorem",
            "img": "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        }
    ]) 

  return (
    <div className="carreras-secu">
        <h1>Conoce las carreras en las que puedes participar como estudiante de secundaria</h1>
        <p>Encuentra y participa en las experiencias relacionadas a distintas carreras profesionales</p>

        <div className="tarjetas-container">{
            carreras.map(cObj=>(
                <div className="card" key={cObj.id}>
                    <div className="card-image">
                        <img src={cObj.img} alt="" />
                        <div className="card-text-container">
                            <div className="card-text">
                                <h1>{cObj.nombre}</h1>
                                <p>{cObj.desc}</p>  
                                <div className="btn-container">
                                    <Link to={"/carrerasSecu/"+cObj.nombre.replace(/\s/g, '')} className='btn-request'>Solicitar</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
