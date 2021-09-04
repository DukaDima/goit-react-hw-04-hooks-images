import { useEffect } from 'react';
import '../../components/styles.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default function Modal({ largePhoto, onClose }) {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largePhoto} alt="largePhoto" />
      </div>
    </div>,
    modalRoot,
  );
}
