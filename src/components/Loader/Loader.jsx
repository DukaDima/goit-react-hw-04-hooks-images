import React from 'react';
import '../../components/styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="Overlay">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
