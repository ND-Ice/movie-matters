import React from "react";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import Movie from "./Movie";

export default function SimilarMovies({ movies }) {
  const { results: movieData } = movies;
  const router = useRouter();
  return (
    <Box mt={10}>
      <Heading>Related Movies</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(5,1fr)"
        gap="1rem"
        my={10}
      >
        {movieData?.map((movie) => (
          <Movie
            key={movie?.id}
            movie={movie}
            onNavigate={() => router.push(`/movie-details/${movie?.id}`)}
          />
        ))}
      </Box>
    </Box>
  );
}
