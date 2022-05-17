import client from "./client";

const api_key = "3347ef7d10c881c226b6545221509704";

const getPopular = (pageNumber) =>
  client.get(`/popular?api_key=${api_key}&language=en-US&page=${pageNumber}`);

const getLatest = (pageNumber) =>
  client.get(
    `/now_playing?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getTrending = (pageNumber) =>
  client.get(`/top_rated?api_key=${api_key}&language=en-US&page=${pageNumber}`);

const getUpcoming = (pageNumber) =>
  client.get(`/upcoming?api_key=${api_key}&language=en-US&page=${pageNumber}`);

const getMovieDetails = (movieId) =>
  client.get(`/${movieId}?api_key=${api_key}&language=en-US`);

const getMovieImages = (movieId) =>
  client.get(`/${movieId}/images?api_key=${api_key}&language=en-US`);

const getSimilarMovies = (movieId, pageNumber = 1) =>
  client.get(
    `/${movieId}/similar?api_key=${api_key}&language=en-US&page=${pageNumber}`
  );

const getMovieReviews = (movieId) =>
  client.get(`/${movieId}/reviews?api_key=${api_key}&language=en-US&page=1`);

const moviesApi = {
  getPopular,
  getLatest,
  getTrending,
  getUpcoming,
  getMovieImages,
  getMovieDetails,
  getSimilarMovies,
  getMovieReviews,
};

export default moviesApi;
