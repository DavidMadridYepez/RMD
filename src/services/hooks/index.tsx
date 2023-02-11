import { useQuery } from '@tanstack/react-query';
//API KEY
import { API_KEY } from '../constants/API_KEY';
//Types
import { RequestType } from '../utils/types';

export const useTrending = () => {
  return useQuery({
    queryKey: ['Trending'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        )
      ).json(),
  });
};

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['Popular'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json(),
  });
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['Top Rated'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
        )
      ).json(),
  });
};

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ['Upcoming'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
        )
      ).json(),
  });
};
