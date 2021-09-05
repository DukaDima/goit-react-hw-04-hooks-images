import { useState, useEffect } from 'react';
import '../../components/styles.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spinner from '../Loader/Loader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function ImageGallery({ searchPhoto, onClick }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '22333452-088c943be01bb3bdea991b2c2';

  useEffect(() => {
    if (searchPhoto === '') {
      return;
    }
    setPage(1);
    setPhotos([]);
    setLoading(true);
    fetch(
      `${BASE_URL}?q=${searchPhoto}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(photos => setPhotos(photos.hits))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [searchPhoto]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setLoading(true);
    try {
      new Error();
      fetch(
        `${BASE_URL}?q=${searchPhoto}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(photos => setPhotos(oldPhotos => [...oldPhotos, ...photos.hits]))
        .catch(error => setError(error))
        .finally(() => {
          setLoading(false);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [page]);

  const handleAddPage = () => {
    setPage(oldPage => oldPage + 1);
  };
  const handleModalPhoto = modalPhoto => {
    onClick(modalPhoto);
  };
  return (
    <div>
      {error && <p>Ошибка запроса по слову {searchPhoto}</p>}
      {loading && <Spinner />}
      {!photos && <p>Введите ключевое слово</p>}
      {photos && (
        <ul className="ImageGallery">
          {photos.map(hit => (
            <li
              className="ImageGalleryItem"
              key={hit.id}
              onClick={() => handleModalPhoto(hit.largeImageURL)}
            >
              <ImageGalleryItem src={hit.webformatURL} />
            </li>
          ))}
        </ul>
      )}
      {photos.length > 0 && <Button onClick={handleAddPage} />}
    </div>
  );
}
ImageGallery.propTypes = {
  photos: PropTypes.array,
  loading: PropTypes.bool,
  page: PropTypes.number,
  error: PropTypes.any,
  searchPhoto: PropTypes.string,
};
