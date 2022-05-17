import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePaginator } from "chakra-paginator";

import moviesApi from "../api/movies";

import Movie from "../components/Movie";
import scrollToTop from "../components/utilities/scrolltoTop";
import GridWrapper from "../components/GridWrapper";
import Layout from "../components/Layout";
import ResponsivePagination from "../components/ResponsivePagination";

export default function Latest() {
  const router = useRouter();
  const [movies, setMovies] = useState({});

  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  useEffect(() => {
    getLatestMovies();
  }, [currentPage]);

  const getLatestMovies = async () => {
    try {
      const response = await moviesApi.getLatest(currentPage);
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
        <title>Latest Updates - Movies Matter</title>
        <meta
          name="description"
          content="Discover the popular movies that crowd was going crazy on."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        pagesQuantity={movies?.total_pages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Layout>
  );
}
