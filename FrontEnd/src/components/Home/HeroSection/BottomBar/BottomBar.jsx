import React, { useState } from 'react';
import './BottomBar.css';
import SatelitesModal from '../../../Modals/SatelitesModal/SatelitesModal';

const BottomBar = () => {
  const [satelitesModalOpen, setSatelitesModalOpen] = useState(false);

  return (
    <>
      <div className="bottomBar">
        <button
          type="button"
          className="sats_button button text"
          onClick={() => setSatelitesModalOpen(true)}
        >
          Satélites
        </button>
      </div>

      <SatelitesModal
        isOpen={satelitesModalOpen}
        onClose={() => setSatelitesModalOpen(false)}
      />
    </>
  );
};

export default BottomBar;