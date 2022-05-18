import React from "react";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import Movie from "./Movie";
import GridWrapper from "./GridWrapper";

export default function SimilarMovies({ movies }) {
  const { results: movieData } = movies;
  const router = useRouter();

  if (!movieData || movieData?.length === 0) return;

  return (
    <Box mt={10}>
      <Heading mb="2rem">Related Movies</Heading>
      <GridWrapper>
        {movieData?.map((movie) => (
          <Movie
            key={movie?.id}
            movie={movie}
            onNavigate={() => router.push(`/movie-details/${movie?.id}`)}
          />
        ))}
      </GridWrapper>
    </Box>
  );
}
