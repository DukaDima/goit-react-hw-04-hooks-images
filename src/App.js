import React, { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

export default function App() {
  const [searchPhoto, setSearchPhoto] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState('');

  const handleFormSubmit = searchPhoto => {
    setSearchPhoto(searchPhoto);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleClickPhoto = modalPhoto => {
    setModalPhoto(modalPhoto);
    setShowModal(true);
  };

  return (
    <>
      {showModal && <Modal onClose={closeModal} largePhoto={modalPhoto} />}
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchPhoto={searchPhoto} onClick={handleClickPhoto} />
    </>
  );
}
App.propTypes = {
  searchPhoto: PropTypes.string,
  showModal: PropTypes.bool,
  modalPhoto: PropTypes.string,
};
