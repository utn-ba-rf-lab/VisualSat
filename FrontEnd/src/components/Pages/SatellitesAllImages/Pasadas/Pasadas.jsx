import React from 'react'
import './Pasadas.css'

const Pasadas = () => {
  return (
    <div className="pasadasCointainer">
        <div className='pasadasTitle'>
            <h4 className='text'>Pasadas</h4>
        </div>
        <div className='pasadasDataContainer'>
            <div className='pasadasData leftContainer'>
                <h5 className='text'>Últimas pasadas</h5>
                <div className='eachPasadaContainer'>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                </div>
            </div>
            <div className='pasadasData rightContainer'>
                <h5 className='text'>Próximas pasadas</h5>
                <div className='eachPasadaContainer'>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                    <p>19/09/2025 - 04:55 :  Meteor M2-4 - Inclination: 60°</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pasadas