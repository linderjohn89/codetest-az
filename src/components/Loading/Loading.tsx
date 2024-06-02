import './Loading.css';

interface Props {
  slowConnection: boolean;
}

export function Loading({ slowConnection }: Props) {
  return (
    <div className='loading-container'>
      <div className='spinner'>
        <div className='tv'>
          <div className='antenna'>
            <div className='antenna-bar left'></div>
            <div className='antenna-bar right'></div>
          </div>
          <div className='screen'>
            <div className='loading-bars'>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div>
          </div>
        </div>
        <p>Searching for TV shows...</p>
      </div>
      {slowConnection && (
        <div className='slow-connection-warning'>
          <p>Connection is slow. Please wait...</p>
        </div>
      )}
    </div>
  );
}
