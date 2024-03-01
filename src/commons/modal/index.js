import './style.scss';
import { useEffect, useRef, useState } from 'react';

const Modal = ({
  isOpen,
  hasCloseBtn,
  onClose,
  children,
  modalClassName,
  ...props
}) => {
  const modalRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') handleCloseModal();
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;
    if (isModalOpen) {
      modalElement.showModal();
      return;
    }
    modalElement.close();
  }, [isModalOpen]);

  if (isOpen !== isModalOpen) {
    setModalOpen(isOpen);
  }

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className={`modal ${modalClassName || ''}`}
      {...props}
    >
      {children}
      {hasCloseBtn && (
        <button
          className='modal__close-btn'
          onClick={handleCloseModal}
          type='button'
        >
          x
        </button>
      )}
    </dialog>
  );
};

export default Modal;
