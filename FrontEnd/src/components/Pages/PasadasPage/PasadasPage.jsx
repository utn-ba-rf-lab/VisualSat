import React, { useEffect, useState } from 'react'

import axios from "axios";
import './PasadasPage.css'
import { usePasadas } from '../../Context/PasadasContext';

const PasadasPage = () => {
  const { pasadas, loading, error } = usePasadas();
  const pasadasNuevas = (pasadas || []).filter(p => p.new === true);

  return (
    <div className="PasadasPage">
      <div className="PasadasPageCard">
        <div className="pasadasPageTitle">
          <h4>Pasadas</h4>
        </div>
        <div className="pasadasPageDataContainer">
          <div className="pasadasData">
            <h5 className="text">Próximas pasadas</h5>

            <div className="eachPasadaContainer">
              {loading && <p>Cargando pasadas...</p>}

              {error && (
                <p>Ocurrió un error al cargar las pasadas.</p>
              )}

              {!loading && !error && pasadasNuevas.length === 0 && (
                <p>No hay próximas pasadas disponibles.</p>
              )}

              {!loading && !error && pasadasNuevas.map((pasada, index) => (
                <p key={pasada.id || index}>
                  {pasada.sat_name}: {pasada.aos} Inclination: {pasada.elev_max}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasadasPage;
