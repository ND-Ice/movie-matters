import client from "./client";

const api_key = "3347ef7d10c881c226b6545221509704";

const getPopular = (pageNumber) =>
  client.get(
    `/movie/popular?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getLatest = (pageNumber) =>
  client.get(
    `/movie/now_playing?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getTrending = (pageNumber) =>
  client.get(
    `/movie/top_rated?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getUpcoming = (pageNumber) =>
  client.get(
    `/movie/upcoming?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getMovieDetails = (movieId) =>
  client.get(`/movie/${movieId}?api_key=${api_key}&language=en-US`);

const getMovieImages = (movieId) =>
  client.get(`/movie/${movieId}/images?api_key=${api_key}&language=en-US`);

const getSimilarMovies = (movieId, pageNumber = 1) =>
  client.get(
    `/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getMovieReviews = (movieId) =>
  client.get(
    `/movie/${movieId}/reviews?api_key=${api_key}&language=en-US&page=1`
  );

const getMovieVideo = (movieId) =>
  client.get(`/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);

const moviesApi = {
  getPopular,
  getLatest,
  getTrending,
  getUpcoming,
  getMovieImages,
  getMovieDetails,
  getSimilarMovies,
  getMovieReviews,
  getMovieVideo,
};

export default moviesApi;
