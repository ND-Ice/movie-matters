import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { GridItem, Badge, Text } from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";

export default function Movie({ movie, onNavigate }) {
  return (
    <StyledGridItem>
      <ImageWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt="movie banner"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg"
        />
      </ImageWrapper>
      {movie?.adult && (
        <StyledBadge colorScheme="red" variant="solid">
          18+
        </StyledBadge>
      )}
      <StyledHeading>{movie?.title}</StyledHeading>
      <Overlay>
        <IconWrapper onClick={onNavigate}>
          <FiPlay />
        </IconWrapper>
      </Overlay>
    </StyledGridItem>
  );
}

const Overlay = styled.div`
  inset: 0;
  display: grid;
  position: absolute;
  place-items: center;
  transition: all 300ms ease;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  transition: all 300ms ease;
  position: relative;
`;

const StyledGridItem = styled(GridItem)`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${ImageWrapper} {
    transform: scale(1.1);
  }
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 0;
`;

const StyledHeading = styled(Text)`
  color: white;
  font-weight: 400;
  bottom: 1rem;
  left: 1rem;
  position: absolute;
`;

const IconWrapper = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
  border: 2px solid white;
  border-radius: 1rem;
  color: white;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 2rem;

  &:hover {
    background: #fe3d3d;
    border-color: #fe3d3d;
  }
`;
