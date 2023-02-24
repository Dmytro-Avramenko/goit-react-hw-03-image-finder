import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ url, tags, onClick }) {
  return (
    <>
      <li className={s.item}>
        <img src={url} alt={tags} onClick={() => onClick(url)} />
      </li>
    </>
  );  
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}