import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { usePaginator } from "chakra-paginator";

import Movie from "../components/Movie";
import moviesApi from "../api/movies";
import Pagination from "../components/Pagination";
import scrollToTop from "../components/utilities/scrolltoTop";
import GridWrapper from "../components/GridWrapper";
import Layout from "../components/Layout";

export default function Trending() {
  const router = useRouter();
  const [movies, setMovies] = useState({});

  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  useEffect(() => {
    getTrendingMovies();
  }, [currentPage, movies]);

  const getTrendingMovies = async () => {
    try {
      const response = await moviesApi.getTrending(currentPage);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  return (
    <Layout>
      <Head>
        <title>Trending - Master-Byte</title>
        <meta name="description" content="Generated by create next app" />
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

      <Flex mt={10} justify="flex-end">
        <Pagination
          pagesQuantity={movies?.total_pages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Layout>
  );
}
