import React, { useEffect, useState } from 'react'
import { pasadasData } from '../../../../data/pasadas'
import PasadasService from '../../../../services/pasadas.js'
import './Pasadas.css'
import { usePasadas } from '../../../Context/PasadasContext';


const Pasadas = ({ satName }) => {
    const { 
        pasadasSatelite, 
        loading, 
        error, 
        fetchPasadasPorSatelite 
    } = usePasadas();

//	useEffect(() => {
//		const pasadas = PasadasService.obtenerPasadas({sate_id: "59051"});
//		setPasadas(pasadas);
//	}, []);

    // Disparar la consulta específica cada vez que cambie o se defina satName
    useEffect(() => {
        if (satName) {
            fetchPasadasPorSatelite(satName);
        }
    }, [satName, fetchPasadasPorSatelite]);

    // Si viene satName usamos las pasadas filtradas del satélite; si no, la lista general
    const listaAFiltrar = (pasadasSatelite || []);

    const pasadasNuevas = listaAFiltrar.filter(p => p.new === true);
    const pasadasAntiguas = listaAFiltrar.filter(p => p.new === false);

    return (
        <div className="pasadasCointainer">
            <div className='pasadasTitle'>
                <h4 className='text'>Pasadas {satName ? `- ${satName}` : ''}</h4>
            </div>

            <div className='pasadasDataContainer'>
                {loading && (
                    <div className='pasadasStatusMessage'>
                        <p className='text'>Cargando pasadas...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className='pasadasStatusMessage error'>
                        <p className='text'>Ocurrió un error al cargar las pasadas.</p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <div className='pasadasData leftContainer'>
                            <h5 className='text'>Últimas pasadas</h5>
                            <div className='eachPasadaContainer'>
                                {pasadasAntiguas.length === 0 ? (
                                    <p className='text empty'>No hay pasadas anteriores registradas.</p>
                                ) : (
                                    pasadasAntiguas.map((pasada, index) => (
                                        <p key={pasada.id || index}>
                                            {pasada.fecha} {pasada.hora} : {pasada.name} Inclination: {pasada.Inclination}
                                        </p>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className='pasadasData rightContainer'>
                            <h5 className='text'>Próximas pasadas</h5>
                            <div className='eachPasadaContainer'>
                                {pasadasNuevas.length === 0 ? (
                                    <p className='text empty'>No hay próximas pasadas disponibles.</p>
                                ) : (
                                    pasadasNuevas.map((pasada, index) => (
                                        <p key={pasada.id || index}>
                                            {pasada.fecha} {pasada.hora} : {pasada.name} Inclination: {pasada.Inclination}
                                        </p>
                                    ))
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Pasadas
