import { useParams } from 'react-router-dom';
import useRequest from '../utils/useRequest';
import { GetShow } from '../services/TVMazeService';
import { Information } from '../components/Information/Information';
import { NotFound } from '../components/NotFound/NotFound';
import { ShowDetails } from '../components/ShowDetails/ShowDetails';
import { Loading } from '../components/Loading/Loading';

export function ShowPage() {
  let { id } = useParams();
  const [response, isLoading, error, slowConnection] = useRequest(() => GetShow(id ?? ''), []);

  return error ? (
    error.response.status === 404 ? (
      <NotFound />
    ) : (
      <Information message={error?.response?.statusText || 'Something went wrong'} />
    )
  ) : isLoading || !response ? (
    <Loading slowConnection={slowConnection} />
  ) : (
    <ShowDetails show={response?.data} />
  );
}
