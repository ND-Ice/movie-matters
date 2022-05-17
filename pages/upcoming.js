import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { usePaginator } from "chakra-paginator";

import Movie from "../components/Movie";
import scrollToTop from "../components/utilities/ScrolltoTop";
import Pagination from "../components/Pagination";
import GridWrapper from "../components/GridWrapper";
import Layout from "../components/Layout";

import moviesApi from "../api/movies";

export default function Upcoming() {
  const router = useRouter();
  const [movies, setMovies] = useState({});

  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  useEffect(() => {
    getUpcomingMovies();
  }, [currentPage]);

  const getUpcomingMovies = async () => {
    try {
      const response = await moviesApi.getUpcoming(currentPage);
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
        <title>Upcoming - Master-Byte</title>
        <meta
          name="description"
          content="Discover the upcoming movies that the crowd were talking about."
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
