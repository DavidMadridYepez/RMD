//Hooks
import { useUpcomingMovies } from '../services/hooks';

const UpcomingMovies = () => {
  const { data, error, isLoading } = useUpcomingMovies();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  console.log(data);

  return (
    <div className='flex justify-center flex-wrap gap-6'>
      {data?.results.map((item) => (
        <div className='' key={item.id}>
          <img
            className='w-64 h-96'
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt='Image Poster'
          />
        </div>
      ))}
    </div>
  );
};

export default UpcomingMovies;
