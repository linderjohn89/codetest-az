import { FaStar } from 'react-icons/fa';
import { Show } from '../../models/models';
import './ShowDetails.css';

interface Props {
  show: Show;
}

export function ShowDetails({ show }: Props) {
  return (
    <div className='show-details' style={{ backgroundImage: `url(${show?.image?.original})` }}>
      <div className='overlay'>
        <div className='show-info'>
          <h1>{show?.name}</h1>
          <p className='summary' dangerouslySetInnerHTML={{ __html: show?.summary }}></p>
          <div className='details'>
            <p>
              <strong>Type:</strong> {show?.type}
            </p>
            <p>
              <strong>Language:</strong> {show?.language}
            </p>
            <p>
              <strong>Status:</strong> {show?.status}
            </p>
            <p>
              <strong>Premiered:</strong> {show?.premiered}
            </p>
            {show?.ended && (
              <p>
                <strong>Ended:</strong> {show.ended}
              </p>
            )}
            <p>
              <strong>Schedule:</strong> {show?.schedule?.days.join(', ')} at {show?.schedule?.time}
            </p>
            <p>
              <strong>Runtime:</strong> {show?.runtime} minutes
            </p>
            <p>
              <strong>Average Runtime:</strong> {show?.averageRuntime} minutes
            </p>
            <p>
              <strong>Rating:</strong> <FaStar className='star-icon' /> {show?.rating?.average}
            </p>
            <p>
              <strong>Genres:</strong> {show?.genres?.join(', ')}
            </p>
            <p>
              <strong>Network:</strong> {show?.network?.name} ({show?.network?.country?.name})
            </p>
            <p>
              <a href={show?.officialSite} target='_blank' rel='noopener noreferrer'>
                Official Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
