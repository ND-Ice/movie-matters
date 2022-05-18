import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { FiPlay } from "react-icons/fi";

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
  const router = useRouter();
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
          <CarouselItem
            item={item}
            onNavigate={() => router.push(`/movie-details/${item?.id}`)}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

function CarouselItem({ item, onNavigate }) {
  return (
    <SwiperSlide>
      <Box pos="relative" borderRadius="1rem" overflow="hidden" role="group">
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
        <Box position="relative" height="300px" zIndex="-1">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              item?.backdrop_path || item?.porter_path
            }`}
            alt="carousel banner"
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL="https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg"
          />
        </Box>

        {/* overlay */}
        <Box
          pos="absolute"
          display="grid"
          placeItems="center"
          inset={0}
          bg="blackAlpha.600"
          opacity="0"
          transition="all 300ms ease"
          _groupHover={{ opacity: 1 }}
        >
          <Box
            p="2rem"
            border="2px solid white"
            cursor="pointer"
            w="min-content"
            borderRadius="1rem"
            fontSize="2rem"
            transition="all 300ms ease"
            _hover={{ borderColor: "red.500", bg: "red.500" }}
            onClick={onNavigate}
          >
            <FiPlay />
          </Box>
        </Box>
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
