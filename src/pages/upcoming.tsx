//Hooks
import { useUpcomingMovies } from '../services/hooks';
//Components
import Page from '../components/page';

const UpcomingMovies = () => {
  const { data, error, isLoading } = useUpcomingMovies();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default UpcomingMovies;
