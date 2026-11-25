import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SatelitesService from '../../../services/satelites'
import './SatelitesModal.css';

const SatelitesModal = ({ isOpen, onClose }) => {
  const [satelites, setSatelites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;

    const fetchSatelites = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await SatelitesService.listarSatelites();
        if (isMounted) {
          setSatelites(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Ocurrió un error al cargar los satélites.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSatelites();

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="satelites-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="satelites-modal-title"
    >
      <div
        className="SatelitesModalCard"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="satelitesModalHeader">
          <h4 id="satelites-modal-title">Satélites</h4>
          <button
            type="button"
            className="satelites-modal-close"
            onClick={onClose}
            aria-label="Cerrar modal de satélites"
          >
            &times;
          </button>
        </div>

        <div className="satelitesModalBody">
          {loading && <p>Cargando satélites...</p>}

          {error && <p>{error}</p>}

          {!loading && !error && satelites.length === 0 && (
            <p>No hay satélites disponibles.</p>
          )}

          {!loading && !error && satelites.length > 0 && (
            <div className="satelitesGrid">
              {satelites.map((satelite) => (
                <Link
                  key={satelite.sate_id}
                  to={`/satelites/${satelite.sate_id}`}
                  className="sateliteGridItem"
                  onClick={onClose}
                >
                  {satelite.nombre}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SatelitesModal;