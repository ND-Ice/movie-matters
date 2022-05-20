import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import Error from "next/error";

import moviesApi from "../api/movies";

import Movie from "../components/Movie";
import Carousel from "../components/Carousel";
import GridWrapper from "../components/GridWrapper";
import Layout from "../components/Layout";

export default function Home({ movies, error }) {
  const router = useRouter();

  if (error)
    return <Error statusCode={error?.errorCode} title={error?.message} />;

  return (
    <Layout>
      <Head>
        <title>Home - Movies Matter</title>
        <meta
          name="description"
          content="Discover the popular movies that crowd was going crazy on."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel items={movies?.results} />

      <Heading as="h1" my={10}>
        Popular Movies
      </Heading>
      <GridWrapper>
        {movies?.results?.map((movie) => (
          <Movie
            key={movie?.id}
            movie={movie}
            onNavigate={() => router.push(`/movie-details/${movie?.id}`)}
          />
        ))}
      </GridWrapper>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const response = await moviesApi.getPopular(1);
    return { props: { movies: response.data } };
  } catch (error) {
    return {
      props: {
        error: {
          errorCode: 500,
          message: "Something went wrong. Please try again later.",
        },
      },
    };
  }
};
