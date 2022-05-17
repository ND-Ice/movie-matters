import styled from "@emotion/styled";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const breakpoints = {
  580: {
    slidesPerView: 2,
  },
  955: {
    slidesPerView: 3,
  },
};

export default function Carousel({ items }) {
  return (
    <StyledSwiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      slidesPerGroup={1}
      autoplay={{ disableOnInteraction: false, delay: 2000 }}
      pagination={{ clickable: true }}
      loop
      breakpoints={breakpoints}
    >
      {items?.slice(0, 15)?.map((item) => (
        <SwiperSlide key={item?.id}>
          <CarouselItem item={item} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

function CarouselItem({ item }) {
  return (
    <SwiperSlide>
      <Box pos="relative">
        <Box pos="absolute" bottom="1rem" left="1rem" mb={5}>
          <Heading
            as="h1"
            color="#ffffff"
            fontSize="2xl"
            letterSpacing="1px"
            fontWeight={500}
            textShadow="1px 1px 1px #000000"
          >
            {item?.title}
          </Heading>
        </Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            item?.backdrop_path || item?.porter_path
          }`}
          alt="carousel banner"
          height="300px"
          zIndex="-1"
          objectFit="cover"
          borderRadius="1rem"
        />
      </Box>
    </SwiperSlide>
  );
}

const StyledSwiper = styled(Swiper)`
  .swiper {
    background-color: #ffffff;
  }

  .swiper-pagination-bullet {
    background-color: #ffffff;
  }

  .swiper-pagination-bullet-active {
    background: #d81e1e;
  }
`;
