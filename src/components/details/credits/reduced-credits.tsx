import { useCredits } from '../../../hooks/details';

type Props = {
  movieId: number;
};

const ReducedCredits: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useCredits(movieId);

  return <div>ReducedCredits</div>;
};

export default ReducedCredits;
