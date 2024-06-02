import { useSelector } from 'react-redux';
import { ApiResponse } from '../../models/models';
import { ResultListItem } from './ResultListItem';
import './ResultList.css';

export function ResultList() {
  const searchResult = useSelector((state: any) => state.searchReducer.result);

  const sortedShows: ApiResponse[] = searchResult.slice().sort((a: ApiResponse, b: ApiResponse) => {
    const ratingA = a.show.rating.average ?? -Infinity;
    const ratingB = b.show.rating.average ?? -Infinity;
    return ratingB - ratingA;
  });

  return (
    <div id='results'>
      {sortedShows?.map((item: ApiResponse) => (
        <ResultListItem key={item.show.id} show={item.show} />
      ))}
    </div>
  );
}
