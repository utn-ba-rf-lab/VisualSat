import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import PasadasService from '../../services/pasadas.js'

const PasadasContext = createContext(null);

export const PasadasProvider = ({ children }) => {
  const [pasadas, setPasadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchPasadas = async (tipo = "proximas", sate_id = "") => {
    setLoading(true);
    try {
	  var pasadas;
	  const params = (sate_id == "") ? {} : {sate_id: sate_id};
	  if (tipo == "proximas") {
	      pasadas = await PasadasService.obtenerPasadas(params);
		  console.debug("Pasadas: ", pasadas)
	  } else {
	      pasadas = await PasadasService.obtenerPasadasAnteriores(params);
		  console.debug("Pasadas: ", pasadas)
	  }
      setPasadas(pasadas);
      setError(null);
    } catch (err) {
      console.error("Error al obtener pasadas:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasadas();
  }, []);

  return (
    <PasadasContext.Provider value={{ pasadas, loading, error, refetchPasadas: fetchPasadas }}>
      {children}
    </PasadasContext.Provider>
  );
};

export const usePasadas = () => {
  const context = useContext(PasadasContext);
  if (!context) {
    throw new Error('usePasadas debe usarse dentro de un PasadasProvider');
  }
  return context;
};
