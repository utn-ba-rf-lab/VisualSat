import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ImagenesService from '../../services/imagenes.js';

const ImagenesContext = createContext(null);

export const ImagenesProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImagenes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ImagenesService.obtenerImagenes();
      console.debug("Imágenes: ", data);
      setImagenes(data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener imágenes:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImagenes();
  }, [fetchImagenes]);

  return (
    <ImagenesContext.Provider
      value={{
        imagenes,
        loading,
        error,
        refetchImagenes: fetchImagenes,
        fetchImagenesPorSatelite,
        limpiarFiltroSatelite,
      }}
    >
      {children}
    </ImagenesContext.Provider>
  );
};

export const useImagenes = () => {
  const context = useContext(ImagenesContext);
  if (!context) {
    throw new Error('useImagenes debe usarse dentro de un ImagenesProvider');
  }
  return context;
};