import { memo, useCallback } from 'react';
import { useThemeColors } from '../../contexts/Theme.context';
import StarRating from './StarRating';

const Place = memo(({ id, name, rating, onRate, onDelete }) => {

  const { theme, oppositeTheme } = useThemeColors();

  const handleRate = useCallback((newRating) => {
    onRate(id, newRating);
  }, [id, onRate])

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <div className={`card bg-${theme} border-${oppositeTheme} mb-4`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <StarRating
          selectedStars={rating}
          onRate={handleRate}
        />
        <button className="btn btn-primary" onClick={handleDelete}>
          Verwijder
        </button>
      </div>
    </div>
  );
});

export default Place;
