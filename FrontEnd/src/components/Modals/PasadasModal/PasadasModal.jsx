import React, { useEffect } from 'react';
import { usePasadas } from '../../Context/PasadasContext';
import './PasadasModal.css';

const PasadasModal = ({ isOpen, onClose }) => {
  const { pasadas, loading, error } = usePasadas();
  const pasadasNuevas = (pasadas || []).filter((p) => p.new === true);

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
      className="pasadas-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pasadas-modal-title"
    >
      <div
        className="PasadasModalCard"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pasadasModalHeader">
          <h4 id="pasadas-modal-title">Pasadas</h4>
          <button
            type="button"
            className="pasadas-modal-close"
            onClick={onClose}
            aria-label="Cerrar modal de pasadas"
          >
            &times;
          </button>
        </div>

        <div className="pasadasModalDataContainer">
          <div className="pasadasData">
            <h5 className="text">Próximas pasadas</h5>

            <div className="eachPasadaContainer">
              {loading && <p>Cargando pasadas...</p>}

              {error && <p>Ocurrió un error al cargar las pasadas.</p>}

              {!loading && !error && pasadasNuevas.length === 0 && (
                <p>No hay próximas pasadas disponibles.</p>
              )}

              {!loading &&
                !error &&
                pasadasNuevas.map((pasada, index) => (
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

export default PasadasModal;