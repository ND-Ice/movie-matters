import axios from "axios";
import { useState, useEffect } from "react";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getMovies = async () => {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3347ef7d10c881c226b6545221509704&language=en-US&page=1"
    );
    setMovies(movies.data);
  };

  const getTrendingMovies = async () => {
    const trendingMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=3347ef7d10c881c226b6545221509704&language=en-US&page=1"
    );
    setTrendingMovies(trendingMovies.data);
  };

  const getLatest = async () => {
    const latestMovies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=3347ef7d10c881c226b6545221509704&language=en-US"
    );
    setLatestMovies(latestMovies.data);
  };

  const getUpcoming = async () => {
    const upcomingMovies = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=3347ef7d10c881c226b6545221509704&language=en-US&page=1"
    );
    setUpcoming(upcomingMovies.data);
  };

  useEffect(() => {
    getMovies();
    getTrendingMovies();
    getLatest();
    getUpcoming();
  }, []);

  return { movies, trendingMovies, latestMovies, upcoming };
}
