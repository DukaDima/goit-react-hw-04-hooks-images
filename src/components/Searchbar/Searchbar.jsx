import { useState } from 'react';
import '../../components/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchPhoto, setSearchPhoto] = useState('');
  const handlePhotoChange = event => {
    setSearchPhoto(event.currentTarget.value.toLowerCase());
  };
  const handlePhotoSubmit = event => {
    event.preventDefault();
    if (searchPhoto.trim() === '') {
      toast.error('ВВЕДИТЕ КЛЮЧЕВОЕ СЛОВО ПОИСКА');
      return;
    }
    onSubmit(searchPhoto);
    setSearchPhoto('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handlePhotoSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={searchPhoto}
          onChange={handlePhotoChange}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  searchPhoto: PropTypes.string,
};
