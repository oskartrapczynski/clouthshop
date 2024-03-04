import styles from './Photos.module.css';
import { FlexContainer } from '..';
import { useState } from 'react';

const Photos = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  const handleClickThumbnail = (photo) => setCurrentPhoto(photo);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => (
          <img
            className={currentPhoto === photo ? styles.active : ''}
            key={photo}
            src={photo}
            onClick={() => handleClickThumbnail(photo)}
          />
        ))}
      </div>
      <img className={styles.mainPhoto} src={currentPhoto} />
    </FlexContainer>
  );
};

export default Photos;
