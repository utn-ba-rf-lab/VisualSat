import React, { useEffect, useState } from 'react'
import { pasadasData } from '../../../../data/pasadas'
import PasadasService from '../../../../services/pasadas.js'
import './Pasadas.css'

const Pasadas = () => {
    const pasadasAntiguas = pasadasData.filter(p => p.new == false)
    const pasadasNuevas = pasadasData.filter(p => p.new == true)
	const [pasadas, setPasadas] = useState([]);

	useEffect(() => {
		const pasadas = PasadasService.obtenerPasadas({sate_id: "59051"});
		setPasadas(pasadas);
	}, []);

    return (
        <div className="pasadasCointainer">
            <div className='pasadasTitle'>
                <h4 className='text'>Pasadas</h4>
            </div>
            <div className='pasadasDataContainer'>
                <div className='pasadasData leftContainer'>
                    <h5 className='text'>Últimas pasadas</h5>
                    <div className='eachPasadaContainer'>
                        {pasadasAntiguas.map(pasada => (
                            <p>{pasada.fecha} - {pasada.hora} :  {pasada.name}- Inclination: {pasada.Inclination}</p>
                        ))}
                    </div>
                </div>
                <div className='pasadasData rightContainer'>
                    <h5 className='text'>Próximas pasadas</h5>
                    <div className='eachPasadaContainer'>
                        {pasadasNuevas.map(pasada => (
                            <p>{pasada.fecha} - {pasada.hora} :  {pasada.name}- Inclination: {pasada.Inclination}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pasadas
