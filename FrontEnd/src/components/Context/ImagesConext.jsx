import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ImagenesContext = createContext(null);

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const ImagenesProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);
  const [imagenesSatelite, setImagenesSatelite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodasImagenes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/imagenes`);
      setImagenes(response.data);
    } catch (err) {
      console.error("Error al obtener todas las imágenes:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodasImagenes();
  }, [fetchTodasImagenes]);

  const value = {
    imagenes,
    imagenesSatelite,
    loading,
    error
  };

  return (
    <ImagenesContext.Provider value={value}>
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