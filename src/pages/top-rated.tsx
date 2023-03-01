import { useTopRatedMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';

const TopRatedMovies = () => {
  const { data, error, isLoading } = useTopRatedMovies();

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <Page data={data} />;
};

export default TopRatedMovies;
