import { useNavigate } from 'react-router-dom';
import { Show } from '../../models/models';
import './ResultList.css';
import { FaStar } from 'react-icons/fa';

interface Props {
  show: Show;
}

export function ResultListItem({ show }: Props) {
  const navigate = useNavigate();
  const fallbackImage = '/movie.jpg'; // URL to the fallback image
  const showImage = show.image ? show.image.original : fallbackImage;

  function GoToShow() {
    navigate('/' + show.externals.thetvdb);
  }

  return (
    <div className='show' onClick={() => GoToShow()}>
      <img src={showImage} alt={show.name} />
      <div>
        <h2>{show.name}</h2>
        <div className='rating'>
          <FaStar className='star-icon' />
          <p>{show.rating.average !== null ? show.rating.average : 'N/A'}</p>
        </div>
        <div className='genres'>
          {show.genres.map((genre: string) => (
            <span key={genre} className='genre'>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
