import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import { usePaginator } from "chakra-paginator";

import moviesApi from "../api/movies";

import Movie from "../components/Movie";
import Carousel from "../components/Carousel";
import scrollToTop from "../components/utilities/scrolltoTop";
import GridWrapper from "../components/GridWrapper";
import Layout from "../components/Layout";
import ResponsivePagination from "../components/ResponsivePagination";

export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState({});

  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const getMovies = async () => {
    try {
      const response = await moviesApi.getPopular(currentPage);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  };

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
      <ResponsivePagination
        pagesQuantity={500}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Layout>
  );
}
